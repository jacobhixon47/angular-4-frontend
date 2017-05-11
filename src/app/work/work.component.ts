import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public users = [
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 },
    { name: 'Joe', age: 38 },
    { name: 'Sara', age: 27 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
