import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: '# of views'},
    { value: 900, label: 'Revenue'},
    { value: 22, label: 'Reviews'},
  ]

  items = [
    { 
      image: '/assets/images/couch.jpeg', title: 'Couch', description: 'This is a fantastic couch to sit on'
    },
    { 
      image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'This is a great dresser to stuff in' 
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
