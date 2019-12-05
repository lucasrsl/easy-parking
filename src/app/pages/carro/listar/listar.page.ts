import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database/database.service';
import { CarroService } from 'src/app/service/carro/carro.service';
import { ActionSheetController, ToastController, NavController } from '@ionic/angular';

export interface Car {
  id: number,
  placa: string,
  marca: string,
  modelo: string,
  cor: string,
  entrada: string,
  saida: string,
  is_active: number
}

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  carros: Car[] = [];
 
  constructor(private db: DatabaseService, private carroService: CarroService, private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController, private navCtrl: NavController) { }
 
  ngOnInit() {
    this.carroService.listarCarros().then((carros: Car[]) => {
      debugger
      this.carros = carros;      
    });
  }

  async selecionaCarro(carro) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: carro.placa,
      buttons: [{
        text: 'Registrar saída',
        icon: 'remove',
        handler: () => {
          this.carroService.registrarSaida(carro).then(_ => {
            debugger
            this.presentToast(`Saída do veículo ${carro.placa} registrada com sucesso.`)
          });
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  adicionaCarro() {
    this.navCtrl.navigateForward('/entrada');
  }
}
