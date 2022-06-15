import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Todo list in Angular";
  list:any[]=[];
  addtesk(item:string){
    this.list.push({id:this.list.length,name:item});
  }
  removetesk(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }
}
