import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedRole: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  redirectToLoginPage() {
    if (this.selectedRole === '') {
      this.presentErrorAlert('Please select a role before proceeding.');
      return;
    }

    if (this.selectedRole === 'endUser') {
      this.navCtrl.navigateForward('/end-user');
    } else if (this.selectedRole === 'serviceProvider') {
      this.navCtrl.navigateForward('/service-provider');
    }
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
