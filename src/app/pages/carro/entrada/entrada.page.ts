import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CarroService } from 'src/app/service/carro/carro.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  constructor(private router: Router, private carroService: CarroService, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  registraCarro(form) {
    let data = new Date;
    let dataString = data.toLocaleString();

    let carro = {
      placa: form.form.value.placa,
      marca: form.form.value.marca,
      modelo: form.form.value.modelo,
      cor: form.form.value.cor,
      entrada: dataString,
      saida: '',
      is_active: 1
    }
    
    debugger
    this.carroService.registraEntrada(carro).then(res => {
      debugger
      console.log('Sucesso', res);
      
      this.presentToast(`Carro ${carro.placa} registrado com sucesso.`);
      this.router.navigateByUrl('listar');
    }).catch(er => {
      console.log('Erro', er);
      
      this.presentToast('Erro ao registrar carro.');
    });
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
