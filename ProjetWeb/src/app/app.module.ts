import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {EmployeService} from "./services/employe.service";
import {MailService} from "./services/mail.service";
import {AbsenceService} from "./services/absence.service";
import {CongesService} from "./services/conges.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EmployeesComponent } from './employees/employees.component';
import { MailsComponent } from './mails/mails.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UniqueEmployeComponent } from './unique-employe/unique-employe.component';
import { EmployeesCreationComponent } from './employees-creation/employees-creation.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mails', component: MailsComponent },
  { path: 'stats', component: StatisticsComponent },
  { path: 'employees-management', component: EmployeesComponent },
  { path: 'employees-management/:type', component: EmployeesCreationComponent },
  { path: 'uniqueEmployee/:matricule', component : UniqueEmployeComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    StatisticsComponent,
    EmployeesComponent,
    MailsComponent,
    UniqueEmployeComponent,
    EmployeesCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [EmployeService,MailService,CongesService,AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
