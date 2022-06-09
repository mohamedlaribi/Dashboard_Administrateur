import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodePayement } from 'app/Classes/periode-payement';
import { PeriodePayementService } from 'app/Services/periode-payement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editperiode',
  templateUrl: './editperiode.component.html',
  styleUrls: ['./editperiode.component.css']
})
export class EditperiodeComponent implements OnInit {

  idPeriodePayement : number;
  periodePayement : PeriodePayement = new PeriodePayement();
  periode: Observable<PeriodePayement[]>;

  constructor(private  periodepayementService : PeriodePayementService,
    private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.idPeriodePayement = this.route.snapshot.params['idPeriodePayement'];
    this.periodepayementService.getById(this.idPeriodePayement)
        .subscribe(data =>{
        this.periodePayement = data;
        }, error => console.log(error)) 
        this.periode = this.periodepayementService.getall();
  }
  onSubmit() {
    this.periodepayementService.updatePeriode(this.idPeriodePayement, this.periodePayement).subscribe(data => {
      this.goToPeriodeList();
    }, error => console.log(error));
  }

    goToPeriodeList()
    {
      this.router.navigate(['/list-periode-payement']);
    }

    updateModule()
    {
      this.periodepayementService.updatePeriode(this.idPeriodePayement,this.periodePayement)
      .subscribe(data =>{
        console.log(data);
        this.periodePayement = new PeriodePayement();
        this.goToPeriodeList
      },error => console.log(error));
    }
}
