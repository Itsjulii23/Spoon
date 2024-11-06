import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  private apiUrlCategoria = 'http://localhost:8000/api/categoria/all'; // Cambia esto según tu configuración
  private apiUrlRestaurante = 'http://localhost:8000/api/restaurante/all';
  constructor(private http: HttpClient) { }

  obtenerDatosCategorias(): Observable<any> {
    return this.http.get<any>(this.apiUrlCategoria);
  }

  obtenerDatosRestaurantes(): Observable<any> {
    return this.http.get<any>(this.apiUrlRestaurante);
  }
}
