import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Client } from 'src/app/model/client.model';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  clientes: Client[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.clienteService.getAllClients().subscribe((clients) => {
      console.log(clients);
      this.clientes = clients;
    });
  }
}
