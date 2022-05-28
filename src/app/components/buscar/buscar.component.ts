import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Auto } from 'src/app/model/auto.model';
import { BuscarService } from './buscar.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit,OnChanges{
  autos: Auto[] = [];

  ciudad = new FormControl('cali');
  constructor(private buscarService: BuscarService) {}

  ngOnInit(): void {
    this.fetchAllAutosByCity();

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchAllAutosByCity();

  }

  fetchAllAutosByCity() {
    this.buscarService
      .getAllAutosByCity(this.ciudad.value)
      .subscribe((auto) => {
        console.log(this.ciudad);
        console.log(auto);
        this.autos = auto;
      });
  }
}
