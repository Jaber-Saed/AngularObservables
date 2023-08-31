import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'AngularObservables';

  myObservable = new Observable((observer) => {
    
    console.log('Observable Starts');

    setTimeout(() => { observer.next("1") }, 1000)
    setTimeout(() => { observer.next("2") }, 2000)
    setTimeout(() => { observer.next("3") }, 3000)
    setTimeout(() => { observer.next("4") }, 4000)
    setTimeout(() => { observer.next("5") }, 5000)

  })


  ngOnInit(): void { }

  ObservablesRun() {
    this.myObservable.subscribe((val) => {
      console.log(val);
    })

  }
}
