import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() value;
  @Output() keyEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  keyEvent(event){
    event.preventDefault();
    let keyValue = event.key;
    console.log("key:",keyValue);
    this.keyEmitter.emit(keyValue);
  }
}
