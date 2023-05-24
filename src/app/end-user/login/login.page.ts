import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  isFormValid: boolean = false;

  constructor(private http: HttpClient) {}

  loginFormSubmit() {
    const endpoint = 'http://localhost:8080/auth/login';
    const loginTrimmed = this.login.trim();
    const passwordTrimmed = this.password.trim();

    if (loginTrimmed.length === 0 || passwordTrimmed.length === 0) {
      // Campos vazios, interrompe o envio da requisição
      return;
    }

    const data = {
      login: loginTrimmed,
      password: passwordTrimmed,
    };

    this.http.post(endpoint, data).subscribe(
      (response) => {
        console.log('Requisição de login enviada com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao enviar a requisição de login:', error);
      }
    );
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  updateFormValidity() {
    const loginTrimmed = this.login.trim();
    const passwordTrimmed = this.password.trim();
    this.isFormValid = loginTrimmed.length > 0 && passwordTrimmed.length > 0;
  }
}
