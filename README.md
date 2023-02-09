# TEDU Ecommerce solution using ABP Framework + Angular (TEDU-50)

## Setup Developmenent Environment on Windows

1. Install SQL Server: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
2. Install Redis: https://redis.io/docs/getting-started/installation/install-redis-on-windows/
3. Visual Studio 2022
4. .NET Corre SDK 6.0
5. Redis management tool: https://goanother.com/
6. Visual Studio Code
7. NodeJS

## Running source code Step by step on Visual Studio
- Open Project Solution
- Set Startup Project: TeduEcommerce.Migrator
- Open Package Manager Console windows
- Set Default Project TeduEcommerce.EntityFrameworkCore
- Run command: Update-Database -Context TeduEcommerceDbContext
- Install global tool: dotnet tool install -g Volo.Abp.Cli
- Run command on folder: TeduEcommerce.AuthServer and run abp install-libs
- Set startup project: TeduEcommerce.Admin.HttpApi.Host or set multiple startup projects

## Deployment to CentOS and NGINX (Example: AuthServer)

### Step 1:  Add .NET Product feed to the system
- Add .NET Source
```
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[packages-microsoft-com-prod]\nname=packages-microsoft-com-prod \nbaseurl= https://packages.microsoft.com/yumrepos/microsoft-rhel7.3-prod\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/dotnetdev.repo'
```

### Step 2: Install .NET SDK

```
sudo yum update -y
sudo yum install libunwind libicu -y
sudo yum install dotnet-sdk-6.0
sudo yum install aspnetcore-runtime-6.0
```

### Step 3: Install Redis Cache

```
sudo yum install redis -y
sudo systemctl start redis.service
sudo systemctl enable redis
sudo systemctl status redis.service
```

### Step 4: Install SQL Server on Linux
```
sudo curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2019.repo
sudo yum makecache
sudo yum install -y mssql-server mssql-tools unixODBC-devel
rpm -qi mssql-server
sudo /opt/mssql/bin/mssql-conf setup
sudo systemctl status sqlserver.service
sudo  firewall-cmd --add-port=1433/tcp --permanent
sudo  firewall-cmd --add-port=1431/tcp --permanent
sudo  firewall-cmd --reload

```
- Fill password system: Abcd@123$
- Run command: sqlcmd -S localhost -U sa
- Fill passsword
- Try a command: select * from sys.database and type 'go'

### Step 5: Install NGINX Server
```
sudo yum install nginx -y
sudo systemctl start nginx.service
sudo systemctl enable nginx
sudo systemctl status nginx.service
sudo systemctl reload nginx
```

- Setup a new service:
1. Go to /etc/nginx/config.d folder
2. Create a new file teduecom_auth_server.conf
3. Populate file content:
```
map $http_x_forwarded_for $real_ip {
        ~^(\d+\.\d+\.\d+\.\d+) $1;
        default $remote_addr;
    }
server {
  listen 25000;
  server_name _;
  client_max_body_size 100M;
  location / {
        proxy_pass http://localhost:5000;
        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;

        proxy_set_header Connection keep-alive;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme; 
        proxy_set_header X-Real-IP $remote_addr;
 
        fastcgi_param REMOTE_ADDR $real_ip;
    }
}
```

### Step 6: Deploy and configure ASP.NET Core application
- Create a new service and folder /home/vhost/www
```
cd /home/vhost/www
sudo chown nginx:nginx -R /home/vhost/www/teduecom_auth_server
sudo vi /etc/systemd/system/teduecom_auth_server.service
```

- Edit file teduecom_auth_server.service.conf:
```
[Unit]
Description=TEDU Auth Server

[Service]
WorkingDirectory=/home/vhost/www/teduecom_auth_server
ExecStart=/usr/bin/dotnet /home/vhost/www/teduecom_auth_server/TeduEcommerce.AuthServer.dll
Restart=always
RestartSec=20 # Restart service after 10 seconds if dotnet service crashes
SyslogIdentifier=dotnet-teduecom_admin_api
User=nginx
Environment=ASPNETCORE_ENVIRONMENT=Production

[Install]
WantedBy=multi-user.target
```

- Start service:
```
sudo systemctl start teduecom_auth_server
sudo systemctl enable teduecom_auth_server.service
sudo systemctl status teduecom_auth_server
sudo systemctl restart teduecom_auth_server

```
- Disable Selinux: Turn off access management in Linux
```
sudo vi /etc/sysconfig/selinux
```
- Find SELINUX=enforcing and replace it with SELINUX=disabled
- Save file: Press ESC and type :w and :q to save and quit.
- Reboot system
```
sudo reboot
```

- List all servcies with teduecom prefix:
```
systemctl | grep teduecom
```


### Step 8: Setup firewall to allow 80 and 443
```
sudo firewall-cmd --zone=public --permanent --add-service=http
sudo firewall-cmd --zone=public --permanent --add-service=https
sudo firewall-cmd --reload
sudo systemctl enable firewalld.service
```

### Step 8: Run with public IP

## Note:
- Run add or remove IP in CentOS
```
firewall-cmd --permanent --zone=public --add-port=25000/tcp
firewall-cmd --zone=public --list-ports
sudo firewall-cmd --reload
```

- Update code need restart
```
 sudo systemctl restart teduecom_auth_server
```
