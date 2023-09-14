import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {

  @Input() label:string;
  @Input() id:string;
  @Input() type = "";
  @Input() required = false;

  @Input() value:string;
  @Output() valueChange = new EventEmitter<string>();


  emitValue(event:any){    
    this.valueChange.emit(event.value);
  }
}
