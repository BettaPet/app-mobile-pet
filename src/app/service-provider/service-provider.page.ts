import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.page.html',
  styleUrls: ['./service-provider.page.scss'],
})
export class ServiceProviderPage {

  constructor(private navCtrl: NavController) { }

  login() {
    this.navCtrl.navigateForward('/service-provider/login');
  }

  register() {
    console.log('Service Provider Register');
  }
}
