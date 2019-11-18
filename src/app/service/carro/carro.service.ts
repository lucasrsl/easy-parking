import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  
  constructor(private db: DatabaseService) { }

  listarCarros() {
    return new Promise(resolve => {
      let cars = [{
        id: 1,
        placa: 'OHS-2173',
        marca: 'Renault',
        modelo: 'Sandero',
        cor: 'Prata',
        is_active: 1
      },{
        id: 2,
        placa: 'ONS-2243',
        marca: 'Honda',
        modelo: 'Civic',
        cor: 'Preto',
        is_active: 1
      },{
        id: 3,
        placa: 'IJD-2938',
        marca: 'Ford',
        modelo: 'Ka',
        cor: 'Branco',
        is_active: 0
      }];
      resolve(cars);
    })
    // return new Promise(resolve => {
    //   this.db.getDatabaseState().subscribe(rdy => {
    //     if(rdy) {
    //       this.db.getCars().subscribe(cars => {
    //         resolve(cars);
    //       });
    //     }
    //   });
    // });
  }

  registraEntrada(carro) {
    return new Promise((resolve, reject) => {
      this.db.addCar(carro.placa, carro.marca, carro.modelo, carro.cor, carro.is_active)
      .then(_ => {
        resolve();
      }).catch(_ => {
        reject();
      });
    });
  }
 
  registrarSaida(carro) {
    return new Promise((resolve, reject) => {
      this.db.updateCar(carro).then(_ => {
        resolve();
      }).catch(_ => {
        reject();
      });
    })
  }
}
