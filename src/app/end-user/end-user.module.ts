import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EndUserPageRoutingModule } from './end-user-routing.module';
import { EndUserPage } from './end-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndUserPageRoutingModule
  ],
  declarations: [
    EndUserPage
  ]
})
export class EndUserPageModule {}
