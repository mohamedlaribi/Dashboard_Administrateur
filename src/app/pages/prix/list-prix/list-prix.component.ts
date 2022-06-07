import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prix } from 'app/Classes/prix';
import { PrixService } from 'app/Services/prix.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prix',
  templateUrl: './list-prix.component.html',
  styleUrls: ['./list-prix.component.css']
})
export class ListPrixComponent implements OnInit {

  constructor(private prixService : PrixService ,
    private router : Router) { }

  paramPrix : Observable<Prix[]> ;
  prix : Prix[];
  prix_ : string 

  ngOnInit(): void {
    this.paramPrix = this.prixService.getAllPrix();
  }

  getPrix(){
    this.prixService.getAllPrix().subscribe(data=>{
      this.prix = data ;
    });
  }

  deletePrix(id: number)
  {
    this.prixService.deletePrix(id)
    .subscribe(data =>{
      console.log(data)
      this.getPrix()
    })
  }

  updateModule(idPrix : number){
    this.router.navigate(['edit-prix',idPrix]);
  }
  // Search(){
  //   if(this.prix_ != ""){
  //     this.prix =this.prix.filter(res=>{
  //       return res.prix.toString().toLocaleLowerCase().match(this.prix_.toLocaleLowerCase())
  //     });
  //   }else if(this.prix_ == ""){
  //     this.ngOnInit();
  //   }

  // }

}
