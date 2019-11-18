import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database/database.service';
import { CarroService } from 'src/app/service/carro/carro.service';
import { ActionSheetController, AlertController } from '@ionic/angular';

export interface Car {
  id: number,
  placa: string,
  marca: string,
  modelo: string,
  cor: string,
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
    private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.carroService.listarCarros().then((carros: Car[]) => {
      this.carros = carros;
      // console.log(res);
      
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
            this.showAlert('Sucesso', 'Saída registrada com sucesso.')
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

  async showAlert(titulo, mensagem) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }
}
