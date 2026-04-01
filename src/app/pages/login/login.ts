import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthStore } from '../../core/services/auth/auth-store';
import { AlertService } from '../../core/services/alert/alert-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public loginForm: FormGroup;

  private fb = inject(FormBuilder);
  private authStore = inject(AuthStore);
  private alertService = inject(AlertService);

  constructor() {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { usuario } = this.loginForm.value;
    
    // AuthStore.login() handles navigation and persistence
    this.authStore.login(usuario);
    
    this.alertService.loginSuccess(`Bienvenido de nuevo, ${usuario}`);
  }
}

