import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // expor a variable nome para ser usado no input properties
  @Input('nome_curso') // to set a name for the global var
  //can be just @Input()
  nome_curso: string = 'teste';

  constructor() { }

  ngOnInit() {
  }

}
 