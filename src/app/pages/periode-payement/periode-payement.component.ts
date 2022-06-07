import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modules } from 'app/Classes/modules';
import { PeriodePayement } from 'app/Classes/periode-payement';
import { Prix } from 'app/Classes/prix';
import { ModulesService } from 'app/Services/modules.service';
import { PeriodePayementService } from 'app/Services/periode-payement.service';
import { PrixService } from 'app/Services/prix.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-periode-payement',
  templateUrl: './periode-payement.component.html',
  styleUrls: ['./periode-payement.component.css']
})
export class PeriodePayementComponent implements OnInit {

  constructor(private  periodepayementService : PeriodePayementService,
    private router : Router
     ) { }

    modules: Observable<Modules[]>;
    ppayement : PeriodePayement = new PeriodePayement();
    //payement : Observable<PeriodePayement[]>;
    prix : Prix = new Prix();


  ngOnInit(): void {
  }
  persistPpayement()
  {
    this.periodepayementService.createPpayement(this.ppayement).subscribe(data =>{
      console.log(data);
    },
    error => console.error(error));
  }

  onSubmit()
  {
    this.persistPpayement()
    console.log(this.ppayement)
    this.gotoListP()
  }
  gotoListP()
  {
    this.router.navigate(['/list-periode-payement'])
  }
}
