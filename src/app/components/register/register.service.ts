import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../model/client.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  addClient(cliente: Client) {
    return this.http.post<Client>('http://localhost:8080/client/v1/agregar', cliente);
  }
}
