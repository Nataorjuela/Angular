import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { RentarComponent } from './components/rentar/rentar.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { PagoComponent } from './components/pago/pago.component';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    component: LoginComponent,
  },
  {
    path: 'registrar',
    component: RegisterComponent,
  },
  {
    path: 'buscar',
    component: BuscarComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'contrato',
    component: ContratoComponent,
  },
  {
    path:'pago',
    component: PagoComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    BuscarComponent,
    ClienteComponent,
    MenuComponent,
    RentarComponent,
    ContratoComponent,
    PagoComponent,
  ],
  entryComponents: [ RentarComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
