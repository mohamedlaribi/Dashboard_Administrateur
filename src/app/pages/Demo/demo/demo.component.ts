import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demo } from 'app/Classes/demo';
import { DemoService } from 'app/Services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demonstration : Demo[];

  constructor(private demoService : DemoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDemo();
  }
  private getDemo()
  {
    this.demoService.getDemoList().subscribe(data =>{
        this.demonstration = data ;
    });
  }
  updatedemo(idDemo : number){
    this.router.navigate(['editdemo',idDemo]);
  }
  deleteDemo(idDemo: number)
  {
    this.demoService.deleteDemo(idDemo)
    .subscribe(data =>{
      console.log(data)
      this.getDemo()
    })
  }

}
