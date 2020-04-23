import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
// ModalPage imported
import { ModalPage } from '../modal/modal/modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  // Add ModalPage in declarations
  declarations: [HomePage, ModalPage],
  // Add ModalPage in entryComponents
  entryComponents: [ModalPage]
})
export class HomePageModule { }
