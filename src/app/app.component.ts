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
  errorInsert = new Error(`Bug 404 !`)
  myObservable = new Observable((observer) => {

    console.log('Observable Starts');


    setTimeout(() => { observer.next("1") }, 1000)
    setTimeout(() => { observer.next("2") }, 2000)
    setTimeout(() => { observer.next("3") }, 3000)
    setTimeout(() => { observer.error(this.errorInsert) }, 3200)
    setTimeout(() => { observer.next("4") }, 4000)
    setTimeout(() => { observer.next("5") }, 5000)
    setTimeout(() => { observer.complete() }, 6000)
    setTimeout(() => { observer.next("6") }, 2000)
    setTimeout(() => { observer.next("7") }, 6001)

  })

  //Anthour way to creait Observable by method

  myObservable2 =  Observable.create((observer: { next: (arg0: string) => void; }) => {
    setTimeout(() => { observer.next("A") }, 1000)
    setTimeout(() => { observer.next("B") }, 2000)
    setTimeout(() => { observer.next("C") }, 3000)
    setTimeout(() => { observer.next("D") }, 4000)
    setTimeout(() => { observer.next("E") }, 5000)
  });

  ngOnInit(): void { }

  ObservablesRun() {
    this.myObservable2.subscribe(
      (val: any) => {
        console.log(`Next value: ${val}`);
      },
      (error: { message: any; }) => {
        alert(error.message);
      },
      () => {
        alert('Observable completed.')
      }
    )

  }
}
