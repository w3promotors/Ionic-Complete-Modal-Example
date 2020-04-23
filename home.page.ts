import { Component } from '@angular/core';
// import ModalController
import { ModalController } from '@ionic/angular';
// Import ModalPage that we just created
import { ModalPage } from '../modal/modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  // Add ModalController in constructor
  constructor(private modalController: ModalController) { }

  // This method is useful for open modal dialog
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass:'myModal',
      componentProps:{
        name:'w3promotors',
        email:'support@w3promotors.com'
      }
    });

    modal.present();

    // get data from modal page
    modal.onWillDismiss().then(
      modalData =>{
        console.log(modalData.data['myEmail']);
        console.log(modalData.data['myName']);
      }
    );
  }

}
