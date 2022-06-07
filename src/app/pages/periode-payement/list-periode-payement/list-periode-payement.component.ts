import { Component, OnInit } from '@angular/core';
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

  constructor(private periodepayementServie : PeriodePayementService) { }  
  


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

}
