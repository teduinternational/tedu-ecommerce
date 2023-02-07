# TEDU Ecommerce solution using ABP Framework + Angular (TEDU-50)

# Deploy System using Abp Framework

## Installation on Windows

1. Install SQL Server: https://phoenixnap.com/kb/sql-server-linux
2. Install Redis: https://redis.io/docs/getting-started/installation/install-redis-on-windows/
3. Visual Studio 2022
4. .NET Core 6.0
5. Redis management tool: https://goanother.com/

## Running source code Step by step on Visual Studio
- Add a new user with all privilege: teduecom and <password>
- Choose default Project: TeduEcommerce.Migrator
- Update-Database -Context TeduEcommerceDbContext
- Set Startup Project TeduEcommerce.Migrator and press F5
- Install global tool: dotnet tool install -g Volo.Abp.Cli
- Change directory to: TeduEcommerce.AuthServer and run abp install-libs
- Set startup project: TeduEcommerce.Admin.HttpApi.Host

## Deployment to CentOS and NGINX

### Step 1:  Add .NET Product feed to the system

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

### Step 3: Install Redis
- Install Redis on CentOs:
```
sudo yum install redis -y
sudo systemctl start redis.service
sudo systemctl enable redis
sudo systemctl status redis.service
```

### Step 4: Install SQL Server
```
sudo curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2019.repo
sudo yum makecache
sudo yum install -y mssql-server
rpm -qi mssql-server
sudo /opt/mssql/bin/mssql-conf setup
sudo systemctl status sqlserver.service
sudo  firewall-cmd --add-port=1433/tcp --permanent
sudo  firewall-cmd --add-port=1431/tcp --permanent
sudo  firewall-cmd --reload

```
- Fill password system: Abcd@123$
- Install tools:
```
yum -y install mssql-tools unixODBC-devel
```
- Run command: sqlcmd -S localhost -U sa
- Fill passsword


### Step 4: Deploy and configure ASP.NET Core application
- Create a new service and folder
```
cd /home/vhost/www
sudo chown nginx:nginx -R /home/vhost/www/teduecom_admin_api
sudo vi /etc/systemd/system/teduecom_admin_api.service
```
- Edit file teduecom_admin_api.service:
```
[Unit]
Description=TEDU Admin API

[Service]
WorkingDirectory=/home/vhost/www/teduecom_admin_api
ExecStart=/usr/bin/dotnet /home/vhost/www/teduecom_admin_api/TeduEcommerce.Admin.HttpApi.Host.dll
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
sudo systemctl start teduecom_admin_api
sudo systemctl status teduecom_admin_api
sudo systemctl enable teduecom_admin_api.service
```
- Disable Selinux:
```
sudo vi /etc/sysconfig/selinux
```
- Find SELINUX=enforcing and replace it with SELINUX=disabled
- Reboot system
```
sudo reboot
```
- List all servcies with toomva prefix:
```
systemctl | grep teduecom

```

### Step 5: Restart service when change config
```
 sudo systemctl restart teduecom_admin_api
```

### Step 6: Install nginx
```
sudo yum install nginx -y
sudo systemctl reload nginx
```
- Go to /etc/nginx/config.d
- Create a new file teduecom_admin_api.conf
- Populate file content:
```
map $http_x_forwarded_for $real_ip {
        ~^(\d+\.\d+\.\d+\.\d+) $1;
        default $remote_addr;
    }
server {
  listen <port>;
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

### Step 7: Setup firewall to allow 80 and 443
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
firewall-cmd --permanent --zone=public --add-port=2222/tcp
firewall-cmd --zone=public --list-ports
firewall-cmd --permanent --zone=public --remove-port=25/tcp
```