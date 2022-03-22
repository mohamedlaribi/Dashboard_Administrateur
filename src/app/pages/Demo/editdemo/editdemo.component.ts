import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demo } from 'app/Classes/demo';
import { DemoService } from 'app/Services/demo.service';

@Component({
  selector: 'app-editdemo',
  templateUrl: './editdemo.component.html',
  styleUrls: ['./editdemo.component.css']
})
export class EditdemoComponent implements OnInit {

  idDemo : number ;
  demo : Demo = new Demo() ;
  constructor(private demoService : DemoService,
    private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.idDemo = this.route.snapshot.params['idDemo'];
    console.log(this.idDemo);

    this.demoService.getDemoById(this.idDemo)
        .subscribe(data =>{
        this.demo = data;
        }, error => console.log(error))   
  }
  onSubmit(){
    this.demoService.updatedemo(this.idDemo, this.demo)
    .subscribe(data =>{
      this.goToDemoList();
    }, error => console.log(error));
    
  }

  goToDemoList()
  {
    this.router.navigate(['/demo']);
  }
  updateDemo()
  {
    this.demoService.updatedemo(this.idDemo,this.demo)
    .subscribe(data =>{
      console.log(data);
      this.demo = new Demo();
      this.goToDemoList
    },error => console.log(error));
  }
}
