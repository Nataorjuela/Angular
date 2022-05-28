import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { RegisterService } from './register.service';
import { Client } from '../../model/client.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  url = '/registrar';

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      correo: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      cedula: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      correo: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      cedula: ['', Validators.required],
    });
  }

  addClient() {
    if (
      this.thirdFormGroup.value.cedula.length > 0 &&
      this.firstFormGroup.value.nombre.length > 0 &&
      this.secondFormGroup.value.correo.length > 0
    ) {
      const newClient: Client = {
        cedula: this.thirdFormGroup.value.cedula,
        nombre: this.firstFormGroup.value.nombre,
        correo: this.secondFormGroup.value.correo,
      };
      this.registerService.addClient(newClient).subscribe(() => {});

      Swal.fire(
        'Se registró a ' + this.firstFormGroup.value.nombre,
        'Clic para continuar!',
        'success'
      );
      this.router.navigate(['/buscar']);
    } else {
      Swal.fire(
        'No se pudo registrar',
        'Hubo un error al registrar el usuario!',
        'error'
      );
    }
  }

}
