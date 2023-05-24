import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  personalInfo: any = {
    nome: '',
    login: '',
    password: '',
    confirmPassword: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    cpf: ''
  };

  contactInfo: any = {
    email: '',
    phone: '',
    address: '',
    complement: '',
    address_number: '',
    state: '',
    country: '',
    zip_code: ''
  };

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  years: number[] = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  constructor(private http: HttpClient) {}

  isFormValid(): boolean {
    return (
      this.personalInfo.nome.trim().length > 0 &&
      this.personalInfo.login.trim().length > 0 &&
      this.personalInfo.password.trim().length > 0 &&
      this.personalInfo.confirmPassword.trim().length > 0 &&
      this.personalInfo.password === this.personalInfo.confirmPassword &&
      this.personalInfo.birthDay.trim().length > 0 &&
      this.personalInfo.birthMonth.trim().length > 0 &&
      this.personalInfo.birthYear.trim().length > 0 &&
      this.personalInfo.cpf.trim().length > 0 &&
      this.validateCPF(this.personalInfo.cpf) &&
      this.contactInfo.email.trim().length > 0 &&
      this.contactInfo.phone.trim().length > 0 &&
      this.contactInfo.address.trim().length > 0 &&
      this.contactInfo.address_number.trim().length > 0 &&
      this.contactInfo.state.trim().length > 0 &&
      this.contactInfo.country.trim().length > 0 &&
      this.contactInfo.zip_code.trim().length > 0
    );
  }

  validateCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
      return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rest = 11 - (sum % 11);
    if (rest === 10 || rest === 11) {
      rest = 0;
    }
    if (rest !== parseInt(cpf.charAt(9))) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rest = 11 - (sum % 11);
    if (rest === 10 || rest === 11) {
      rest = 0;
    }
    if (rest !== parseInt(cpf.charAt(10))) {
      return false;
    }

    return true;
  }

  submitForm() {
    if (this.isFormValid()) {

      const formData = {
        personalInfo: this.personalInfo,
        contactInfo: this.contactInfo
      };

      this.http.post('http://localhost:8080/auth/login', formData)
        .subscribe(
          response => {
            console.log('Form submitted successfully:', response);
          },
          error => {
            console.log('An error occurred while submitting the form:', error);
          }
        );
    } else {
      console.log('Invalid form');
    }
  }
}
