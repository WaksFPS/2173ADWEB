import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Midterm1';
  presentDate = new Date();
  time$: Observable<Date>;
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  price: number=20000;
  a: number = 0.259;
  b: number = 1.3495;
  
  Fruits=["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]
  ngOnInit(): void {
      
  }

  data: Object={
    name:'Maglaqui', age:21, food:'Adobo', 
    languages: [
      
        {lname:'JS', level:'Wizard'},
        {lname:'Python', level:'Average'},
        {lname:'Cobol', level:'Wizard'}
      ]
    }

    constructor(){
      this.time$ = interval(1000).pipe(
        map(() => new Date())

      );
    }

}
