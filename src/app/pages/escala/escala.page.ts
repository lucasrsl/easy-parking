import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-escala',
  templateUrl: './escala.page.html',
  styleUrls: ['./escala.page.scss'],
})
export class EscalaPage implements OnInit {

  constructor(public toastController: ToastController) {}

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }
  ngOnInit() {
    this.presentToast('Tela em desenvolvimento');
  }

}
