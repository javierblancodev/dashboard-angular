import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items: any;
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i: number) {
    if(i === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = i;
    }
  }

}
