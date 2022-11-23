import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'src/app/shared/constants/keys.const';
import { LoginRequestDto } from 'src/app/shared/models/login-request.dto';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 100%;
        padding: 1rem;
      }

      :host ::ng-deep .pi-eye {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }

      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent implements OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  valCheck: string[] = ['remember'];

  password!: string;

  loginForm: FormGroup;

  constructor(
    public layoutService: LayoutService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    var request: LoginRequestDto = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };
    this.authService
      .login(request)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        localStorage.setItem(ACCESS_TOKEN, res.access_token);
        localStorage.setItem(REFRESH_TOKEN, res.refresh_token);
        this.router.navigate(['']);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
