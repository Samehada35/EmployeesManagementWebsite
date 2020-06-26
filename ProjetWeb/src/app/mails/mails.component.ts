import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';
import { EmployeService } from '../services/employe.service';
import { Subscription } from 'rxjs';
import {Mail} from "../../models/Mail.model";
import {Employe} from "../../models/Employe.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss']
})
export class MailsComponent implements OnInit {

  mails : Mail[];
  mailsSubscription : Subscription;
  employes : Employe[];
  employesSubscription : Subscription;
    
  constructor(private mailService : MailService,private employeService : EmployeService,private router : Router) { }

  ngOnInit(): void {
         
      this.employesSubscription = this.employeService.employesSubject.subscribe(
        (employes : Employe[])=>{
            this.employes = employes;
            this.mailService.getMails();
        }
      )
      
      this.mailsSubscription = this.mailService.mailsSubject.subscribe(
        (mails : Mail[])=>{
            this.mails = mails;
        }
      )

      this.employeService.getEmployes();
  }
  
  getEmployeNameByMat(mat : string) : string{
    for(let e of this.employes){
        if(e.matricule === mat){
            return e.nomEmp+" "+e.prenomEmp;
        }
    }  
      
    return "Uknown";
  }
  
  ngOnDestroy() {
    this.mailsSubscription.unsubscribe();
    this.employesSubscription.unsubscribe();
  }

  onGetMails(){
      this.mailService.getMails();
  }

  onDisplayMail(id){
      this.router.navigate(['uniqueMail/'+id]); 
  }

  onDeleteMail(id){
      this.mailService.deleteMail(id);
  }

}
