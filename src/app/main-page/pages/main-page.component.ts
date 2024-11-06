import { Component } from '@angular/core';
import { MainPageService } from '../services/main-page.service';
import {Restaurante} from '../interface/RestaurenteInterface';
import { Categoria } from '../interface/Categoria';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  categorias: Categoria[] = [];
  restaurantes: Restaurante[] = [];

  constructor(private mainPageService: MainPageService) { }
  ngOnInit(): void {

    this.mainPageService.obtenerDatosCategorias().subscribe(
      data => {
        this.categorias = data;
        console.log(this.categorias)
      },
      error => {
        console.error('Error al obtener datos', error);
      }
    );

    this.mainPageService.obtenerDatosRestaurantes().subscribe(
      data => {
        this.restaurantes = data;
        console.log(this.restaurantes)
      },
      error => {
        console.error('Error al obtener datos', error);
      }
    );
  }
}
