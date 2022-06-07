import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modules } from 'app/Classes/modules';
import { PeriodePayement } from 'app/Classes/periode-payement';
import { Prix } from 'app/Classes/prix';
import { ModulesService } from 'app/Services/modules.service';
import { PeriodePayementService } from 'app/Services/periode-payement.service';
import { PrixService } from 'app/Services/prix.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {

  constructor(private moduleservice : ModulesService,
    private  periodepayementService : PeriodePayementService,
    private prixService : PrixService,
    private router : Router ) { }

    modules: Observable<Modules[]>;
    payement : Observable<PeriodePayement[]>;
    prix : Prix = new Prix();
    //ParametragePrix : FormGroup ;
    //payementForm :FormGroup ;
    


  ngOnInit(): void {
    this.modules = this.moduleservice.getModules();
    this.payement = this.periodepayementService.getall();
  }

  persistPrix(){
    this.prixService.createPrix(this.prix).subscribe(data=>{
      console.log(data);
    },
    error => console.error(error));
  }

  onSubmit()
  {
    console.log(this.prix)
    this.persistPrix();
    this.gotoDemo()

  }
  gotoDemo()
  {
    this.router.navigate(['/list-prix'])
  }



}
