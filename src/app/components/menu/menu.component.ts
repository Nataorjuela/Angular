import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';
import { Auto } from '../../model/auto.model';
import { MenuService } from './menu.service';
import {RentarComponent} from '../rentar/rentar.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  autos: Auto[] = [];


  panelOpenState = false;

  constructor(private menuService: MenuService,public dialog: MatDialog,    private router: Router,
    ) {}

  ngOnInit(): void {
    this.fetchAllAutos();
  }

  fetchAllAutos(){
    this.menuService.getAllAutos().subscribe((auto) => {
      this.autos = auto;
    })
    

  }
  openDialog(): void{
    const dialogRef=this.dialog.open(RentarComponent,{
      width:'350px',
      data: '¿Desea Rentar Este Automovil?'
    });
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
      if (res){
        console.log('Rentar Automovil');
        this.router.navigate(['/pago']);

      }
    });
  }
}
