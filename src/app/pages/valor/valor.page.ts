import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-valor',
  templateUrl: './valor.page.html',
  styleUrls: ['./valor.page.scss'],
})
export class ValorPage implements OnInit {

  constructor(private toastController: ToastController) { }

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
