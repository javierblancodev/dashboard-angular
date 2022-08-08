import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  partnerUrlComponent = 'partners';

  data = [
    { name: 'James', age: '24', job: 'Designer', employed: true },
    { name: 'Jill', age: '26', job: 'Enginner', employed: false },
    { name: 'Elyse', age: '25', job: 'Engineer', employed: true },
    { name: 'Mark', age: '22', job: 'Developer', employed: false }
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
