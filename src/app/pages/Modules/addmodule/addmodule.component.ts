import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modules } from 'app/Classes/modules';
import { ModulesService } from 'app/Services/modules.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {
 
  alert : boolean = false
  module : Modules = new Modules();
  modules: Observable<Modules[]>;
  

  constructor(private moduleservice : ModulesService,
    private router : Router) { }

  ngOnInit(): void {
    this.modules = this.moduleservice.getModules();

  }
  persistModule()
  {
    this.moduleservice.createModule(this.module).subscribe(data =>{
      console.log(data);
    },
    error => console.error(error));
    this.alert=true
  }

  onSubmit()
  {
    console.log(this.module);
    this.persistModule();
  }

}
