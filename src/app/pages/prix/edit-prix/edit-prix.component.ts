import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modules } from 'app/Classes/modules';
import { PeriodePayement } from 'app/Classes/periode-payement';
import { Prix } from 'app/Classes/prix';
import { ModulesService } from 'app/Services/modules.service';
import { PeriodePayementService } from 'app/Services/periode-payement.service';
import { PrixService } from 'app/Services/prix.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-prix',
  templateUrl: './edit-prix.component.html',
  styleUrls: ['./edit-prix.component.css']
})
export class EditPrixComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private moduleservice : ModulesService,
    private  periodepayementService : PeriodePayementService,
    private prixService : PrixService,
    private router : Router) { }

    idPrix :  number ;
    prix : Prix = new Prix()
    p : Observable<Prix[]>;
    modules: Observable<Modules[]>;
    payement : Observable<PeriodePayement[]>;

  ngOnInit(): void {
    this.idPrix = this.route.snapshot.params['idPrix'];
    this.prixService.getPrixById(this.idPrix)
    .subscribe(data =>{
      this.prix= data;
    },error => console.log(error))
    this.p = this.prixService.getAllPrix();

    this.modules = this.moduleservice.getModules();
    this.payement = this.periodepayementService.getall();
  }
  
  onSubmit(){
    this.prixService.updatePrix(this.idPrix, this.prix)
    .subscribe(data =>{
      this.goToPrixList();
    }, error => console.log(error));
  }
  goToPrixList()
  {
    this.router.navigate(['/list-prix']);
  }

  updatePrix()
  {
    this.prixService.updatePrix(this.idPrix,this.prix)
    .subscribe(data =>{
      console.log(data);
      this.prix = new Prix();
      this.goToPrixList()
    },error => console.log(error));
  }
}
