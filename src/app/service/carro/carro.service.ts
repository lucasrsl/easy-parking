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
      this.db.getDatabaseState().subscribe(rdy => {
        if(rdy) {
          this.db.getCars().subscribe(cars => {
            resolve(cars);
          });
        }
      });
    });
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
