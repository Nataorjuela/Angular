import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from '../../model/client.model';

@Injectable({
  providedIn: 'root',
})

export class ClienteService{
  constructor(private http: HttpClient){

  }

  getAllClients(){
    return this.http.get<Client[]>( 'http://localhost:8080/client/v1/' );
  }

  
}


