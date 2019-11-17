import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CarroService } from 'src/app/service/carro/carro.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController, private carroService: CarroService) { }

  ngOnInit() {
  }

  registraCarro(form) {
    let carro = {
      placa: form.form.value.placa,
      marca: form.form.value.marca,
      modelo: form.form.value.modelo,
      cor: form.form.value.cor,
      is_active: 1
    }
    
    this.carroService.registraEntrada(carro).then(res => {
      console.log('Sucesso', res);
      
      this.showAlert('Sucesso', 'Carro registrado com sucesso.');
      this.router.navigateByUrl('home');
    }).catch(er => {
      console.log('Erro', er);
      
      this.showAlert('Erro', 'Erro ao registrar carro.');
    });
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
