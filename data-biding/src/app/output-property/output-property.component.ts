import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  value: number = 0;

  //decorator to be able to receive returned value
  @Output()
  change_value = new EventEmitter();

  @ViewChild('campo_input',{static: false})
  campo_input: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  incriment() {
    this.campo_input.nativeElement.value++;
    this.change_value.emit({value: this.campo_input.nativeElement.value})
  }

  decriment() {
    this.campo_input.nativeElement.value--;
    this.change_value.emit({value: this.campo_input.nativeElement.value})
  }



}
