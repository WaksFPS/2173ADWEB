import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data binding
  title = 'this string is interpolation'; //interpolation
  clientName = 'Jc'; //property binding
  appliedCSS="blue";
  notAppliedCSS=false;
  myColor='red';

  // showData($event:any){
  //   console.log("Button is clicked: ");
  //   if($event){
  //     console.log($event.target);
  //     console.log($event.target.value);
  //   }
  // }


  // event binding
  clickCount=0
  clickyMe(){
    this.clickCount+=1;
  }
}
