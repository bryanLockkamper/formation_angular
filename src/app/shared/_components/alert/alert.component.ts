import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() title: string;

  @Input() color: string;

  @Output() onClose: EventEmitter<Date>;

  constructor() { 
    this.onClose = new EventEmitter<Date>();
  }

  ngOnInit() {
    
  }

  close() {
    this.onClose.emit(new Date());
  }

}
