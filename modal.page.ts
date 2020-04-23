import { Component } from '@angular/core';
// Import ModalController
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  myName:string = "";
  myEmail: string = "";

  // Add it to constructor
  constructor(private modalController: ModalController,
              private navParams:NavParams
              ) { 
                // we passed name,email from home.page.ts file
                this.myName = this.navParams.get('name');
                this.myEmail = this.navParams.get('email');
              }

  // This method is useful to close modal
  closeModal() {
    this.modalController.dismiss(
      {
        'myEmail': this.myEmail,
        'myName': this.myName
      }
    );
  }
}
