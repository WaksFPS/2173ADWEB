import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  clickCount = 0;
  gift = '';

  clickMe(){
    this.clickCount++;
    this.gift += '🎁';
  }

  showData($event:any){
    console.log("button is clicked!"); 
    if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  reset(){
    this.clickCount = 0;
    this.gift = '';
  }
}
