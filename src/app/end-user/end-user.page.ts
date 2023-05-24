import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.page.html',
  styleUrls: ['./end-user.page.scss'],
})
export class EndUserPage {

  constructor(private navCtrl: NavController) { }

  login() {
    this.navCtrl.navigateForward('/end-user/login');
  }

  register() {
    this.navCtrl.navigateForward('/end-user/register');
  }
}