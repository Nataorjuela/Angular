import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rentar',
  templateUrl: './rentar.component.html',
  styleUrls: ['./rentar.component.scss']
})
export class RentarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RentarComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string,
    ) { }

  ngOnInit(): void {
  }

  onClickNO(): void{
    this.dialogRef.close();
  }

  

}
