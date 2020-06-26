import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Projet Web';
  route: string ="";
  routeDisplay : string ="";
    
    constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "/Home";
      }
      this.route = this.route.substring(1) 
        switch(this.route.toLowerCase()){
            case "home":
                this.routeDisplay = "Accueil";
                break;
            case "employees-management":
                this.routeDisplay = "Gestion employés";
                break;
            case "stats":
                this.routeDisplay = "Statistiques";
                break;
            case "mails":
                this.routeDisplay = "Consultation mails";
                break;
            default:
                this.routeDisplay = "Gestion employés";
                break;
        }
    });
    }
    
  ngOnInit() {
      
  }
}
