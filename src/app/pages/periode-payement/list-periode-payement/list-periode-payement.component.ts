import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeriodePayement } from 'app/Classes/periode-payement';
import { PeriodePayementService } from 'app/Services/periode-payement.service';

@Component({
  selector: 'app-list-periode-payement',
  templateUrl: './list-periode-payement.component.html',
  styleUrls: ['./list-periode-payement.component.css']
})
export class ListPeriodePayementComponent implements OnInit {

  ListPeriodePayement : PeriodePayement[];
  periode : string 

  constructor(private periodepayementServie : PeriodePayementService,
    private router: Router) { }  

  ngOnInit(): void {
    this.getListPeriodePayement();
  }

  getListPeriodePayement()
  {
    this.periodepayementServie.getall().subscribe(data=>{
      this.ListPeriodePayement = data ;
    });
  }
  Search(){
    if(this.periode != ""){
      this.ListPeriodePayement =this.ListPeriodePayement.filter(res=>{
        return res.periode.toString().toLocaleLowerCase().match(this.periode.toLocaleLowerCase())
      });
    }else if(this.periode == ""){
      this.ngOnInit();
    }
  }

  delete(idPeriodePayement: number)
  {
    this.periodepayementServie.delete(idPeriodePayement)
    .subscribe(data =>{
      console.log(data)
      this.getListPeriodePayement()
    })
  }
  
  updatep(idPeriodePayement : number){
    this.router.navigate(['edit-periode',idPeriodePayement]);
  }
}
