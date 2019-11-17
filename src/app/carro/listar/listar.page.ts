import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database/database.service';
import { CarroService } from 'src/app/service/carro/carro.service';

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
 
  constructor(private db: DatabaseService, private carroService: CarroService) { }
 
  ngOnInit() {
    this.carroService.listarCarros().then(res => {
      // this.carros = carros;
      console.log(res);
      
    })
  }
}
