import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // ElementRef is a class that we import from angular
    // ElementRef refers to the element we are working with
    // ElementRef lay upon another class called nativeElement
    // We can see that this el.nativeElement is the element that host our component
    console.log(this.el.nativeElement);
    
  }

  ngOnInit(): void {
    // We can append this element to the body in the html like basic js
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit()
  }
}
