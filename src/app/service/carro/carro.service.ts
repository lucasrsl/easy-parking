import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  
  carros = [{
    id: 1,
    placa: 'OHS-0960',
    marca: 'Renault',
    modelo: 'Sandero',
    cor: 'Prata',
    entrada: '17/11/19, 15:30:17',
    saida: '',
    is_active: 1
  },{
    id: 2,
    placa: 'ONS-2243',
    marca: 'Honda',
    modelo: 'Civic',
    cor: 'Preto',
    entrada: '17/11/19, 13:30:15',
    saida: '',
    is_active: 1
  },{
    id: 3,
    placa: 'IJD-2938',
    marca: 'Ford',
    modelo: 'Ka',
    cor: 'Branco',
    entrada: '17/11/19, 16:30:15',
    saida: '17/11/19, 18:45:45',
    is_active: 0
  }];

  constructor(private db: DatabaseService) { }

  listarCarros() {
    return new Promise(resolve => {
      resolve(this.carros);
    });
    // return new Promise(resolve => {
    //   this.db.getDatabaseState().subscribe(rdy => {
    //     debugger
    //     if(rdy) {
    //       this.db.getCars().subscribe(cars => {
    //         debugger
    //         resolve(cars);
    //       });
    //     }
    //   });
    // });
  }

  registraEntrada(carro) {
    return new Promise(resolve => {
      this.carros.push(carro);
      resolve();
    });
    // return new Promise((resolve, reject) => {
    //   this.db.addCar(carro.placa, carro.marca, carro.modelo,carro.cor, carro.entrada, carro.saida, carro.is_active)
    //   .then(_ => {
    //     debugger
    //     resolve();
    //   }).catch(_ => {
    //     debugger
    //     reject();
    //   });
    // });
  }
 
  registrarSaida(carro) {
    return new Promise(resolve => {
      this.carros.forEach(car => {
        if(car.id === carro.id) {
          car.is_active = 0;
        }
      });
      resolve();
    });
    // carro.is_active = 0;
    // debugger
    // return new Promise((resolve, reject) => {
    //   this.db.updateCar(carro).then(_ => {
    //     debugger
    //     resolve();
    //   }).catch(_ => {
    //     debugger
    //     reject();
    //   });
    // });
  }
}
