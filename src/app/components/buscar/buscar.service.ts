import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auto } from '../../model/auto.model';


@Injectable({
  providedIn: 'root',
})

export class BuscarService {
  constructor(private http: HttpClient) {}

  getAllAutosByCity(city: string){
    return this.http.get<Auto[]>('http://localhost:8080/auto/v1/allAutosByCity/'+city);
  }
}
