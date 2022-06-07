import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modules } from 'app/Classes/modules';
import { ModulesService } from 'app/Services/modules.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editmodule',
  templateUrl: './editmodule.component.html',
  styleUrls: ['./editmodule.component.css']
})
export class EditmoduleComponent implements OnInit {
  idmodule : number;
  module : Modules = new Modules();
  mod: Observable<Modules[]>;

  constructor(private moduleservice : ModulesService,
    private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.idmodule = this.route.snapshot.params['idmodule'];
    console.log(this.idmodule);

    this.moduleservice.getDemoById(this.idmodule)
        .subscribe(data =>{
        this.module = data;
        }, error => console.log(error)) 
        this.mod = this.moduleservice.getModules();
     }
  onSubmit(){
    this.moduleservice.updatemodule(this.idmodule, this.module).subscribe(data =>{
      this.goToDemoList();
    }, error => console.log(error));
    
  }
  goToDemoList()
  {
    this.router.navigate(['/allmodules']);
  }
  updateModule()
  {
    this.moduleservice.updatemodule(this.idmodule,this.module)
    .subscribe(data =>{
      console.log(data);
      this.module = new Modules();
      this.goToDemoList
    },error => console.log(error));
  }
}
