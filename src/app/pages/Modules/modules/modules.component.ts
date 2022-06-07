import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Modules } from 'app/Classes/modules';
import { ModulesService } from 'app/Services/modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  modules  : Modules[]
  nom : string ; 

  constructor(private  modulesSerice : ModulesService,private router: Router) { }

  ngOnInit(): void {
    this.getmodules();
  }
  getmodules()
  {
    this.modulesSerice.getModules().subscribe(data=>{
      this.modules = data ;
    });
  }
  updateModule(idmodule : number){
    this.router.navigate(['editmodule',idmodule]);
  }
  deleteModule(idmodule: number)
  {
    this.modulesSerice.deleteModule(idmodule)
    .subscribe(data =>{
      console.log(data)
      this.getmodules()
    })
  }
  Search(){
    if(this.nom !=""){
      this.modules = this.modules.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
  
      });
    }else if(this.nom ==""){
      this.ngOnInit();
    }

  }
}
