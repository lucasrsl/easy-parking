import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';

import { Car } from '../../../model/Car';
import { User } from '../../../model/User';
import { Scale } from '../../../model/Scale';


@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  cars = new BehaviorSubject([]);
  scales = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'parking.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        debugger
        this.database = db;
        this.seedDatabase();
      }).catch(err => {
        debugger
        console.log(err);
        
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadCars();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getCars(): Observable<Car[]> {
    return this.cars.asObservable();
  }
 
  getScales(): Observable<Scale[]> {
    return this.scales.asObservable();
  }
  
  // ---------------- CARS ---------------- 

  loadCars() {
    return this.database.executeSql('SELECT * FROM cars', []).then(data => {
      let cars: Car[] = [];
      debugger
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          cars.push({ 
            id: data.rows.item(i).id,
            placa: data.rows.item(i).placa, 
            marca: data.rows.item(i).marca, 
            modelo: data.rows.item(i).modelo,
            cor: data.rows.item(i).cor,
            entrada: data.rows.item(i).entrada,
            saida: data.rows.item(i).saida,
            is_active: data.rows.item(i).is_active
           });
        }
      }
      this.cars.next(cars);
    }).catch(err => {
      console.log("LoadCars", err);
      
    });
  }
 
  addCar(placa, marca, modelo, cor, entrada, saida, is_active) {
    let data = [placa, marca, modelo, cor, entrada, saida, is_active];
    return this.database.executeSql('INSERT INTO cars (placa, marca, modelo, cor, entrada, saida, is_active) VALUES (?, ?, ?, ?, ?)', data).then(_ => {
      this.loadCars();
    }).catch(err => {
      console.log("AddCar", err);
      
    });
  }
 
  getCar(id): Promise<Car> {
    return this.database.executeSql('SELECT * FROM cars WHERE id = ?', [id]).then(data => { 
      return {
        id: data.rows.item(0).id,
        placa: data.rows.item(0).placa, 
        marca: data.rows.item(0).marca, 
        modelo: data.rows.item(0).modelo,
        cor: data.rows.item(0).cor,
        entrada: data.rows.item(0).entrada,
        saida: data.rows.item(0).saida,
        is_active: data.rows.item(0).is_active
      }
    });
  }

  getCarByEntry(entrada) : Promise<Car[]> {
    return this.database.executeSql('SELECT * FROM cars WHERE entrada LIKE ?', [entrada]).then(data => { 
      let cars: Car[] = [];
      data.rows.forEach(item => {
        let car = {
          id: item(0).id,
          placa: item(0).placa, 
          marca: item(0).marca, 
          modelo: item(0).modelo,
          cor: item(0).cor,
          entrada: item(0).entrada,
          saida: item(0).saida,
          is_active: item(0).is_active
        }
        cars.push(car);
      });

      return cars;
    });
  }
 
  deleteCar(id) {
    return this.database.executeSql('DELETE FROM cars WHERE id = ?', [id]).then(_ => {
      this.loadCars();
    });
  }
 
  updateCar(car: Car) {
    let data = [car.placa, car.marca, car.modelo, car.cor, car.entrada, car.saida, car.is_active];
    return this.database.executeSql(`UPDATE cars SET placa = ?, marca = ?, modelo = ?, cor = ?, entrada = ?, saida = ?, is_active = ? WHERE id = ${car.id}`, data).then(_ => {
      this.loadCars();
    });
  }

  // ---------------- SCALES ---------------- 

  loadScales() {
    return this.database.executeSql('SELECT * FROM scales', []).then(data => {
      let scales: Scale[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          scales.push({ 
            id: data.rows.item(i).id,
            user_id: data.rows.item(i).user_id, 
            dia: data.rows.item(i).dia, 
            entrada: data.rows.item(i).entrada,
            duracao: data.rows.item(i).duracao
           });
        }
      }
      this.scales.next(scales);
    });
  }
 
  addScale(user_id, dia, entrada, duracao) {
    let data = [user_id, dia, entrada, duracao];
    return this.database.executeSql('INSERT INTO scales (user_id, dia, entrada, duracao) VALUES (?, ?, ?, ?)', data).then(_ => {
      this.loadScales();
    });
  }
 
  getScale(id): Promise<Scale> {
    return this.database.executeSql('SELECT * FROM scales WHERE id = ?', [id]).then(data => { 
      return {
        id: data.rows.item(0).id,
        user_id: data.rows.item(0).user_id, 
        dia: data.rows.item(0).dia, 
        entrada: data.rows.item(0).entrada,
        duracao: data.rows.item(0).duracao
      }
    });
  }
 
  deleteScale(id) {
    return this.database.executeSql('DELETE FROM scales WHERE id = ?', [id]).then(_ => {
      this.loadScales();
    });
  }
 
  updateScale(scale: Scale) {
    let data = [scale.user_id, scale.dia, scale.entrada, scale.duracao];
    return this.database.executeSql(`UPDATE scales SET user_id = ?, dia = ?, entrada = ?, duracao = ? WHERE id = ${scale.id}`, data).then(_ => {
      this.loadScales();
    });
  }
 
  // ---------------- USERS ---------------- 
 
  addUser(usuario, senha, nome, user_type): Promise<boolean> {
    let data = [usuario, senha, nome, user_type];
    return this.database.executeSql('INSERT INTO users (usuario, senha, nome, user_type) VALUES (?, ?, ?, ?)', data).then(_ => {
      return true;
    }).catch(_ => {
      return false;
    });
  }
 
  getUser(usuario, senha): Promise<User> {
    let data = [usuario, senha];
    return this.database.executeSql('SELECT * FROM users WHERE usuario = ? AND senha = ?', data).then(data => { 
      return {
        id: data.rows.item(0).id,
        usuario: data.rows.item(0).usuario, 
        senha: data.rows.item(0).senha, 
        nome: data.rows.item(0).nome,
        user_type: data.rows.item(0).user_type
      }
    });
  }
 
  deleteUser(id): Promise<boolean> {
    return this.database.executeSql('DELETE FROM users WHERE id = ?', [id]).then(_ => {
      return true;
    }).catch(_ => {
      return false;
    });
  }
 
  updateUser(user: User): Promise<boolean> {
    let data = [user.usuario, user.senha, user.nome, user.user_type];
    return this.database.executeSql(`UPDATE users SET usuario = ?, senha = ?, nome = ?, user_type = ? WHERE id = ${user.id}`, data).then(_ => {
      return true;
    }).catch(_ => {
      return false;
    });
  }
}
