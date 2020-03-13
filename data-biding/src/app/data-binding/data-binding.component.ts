import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com';
  curso_angular: boolean = true;
  img_url: string = "http://lorempixel.com/400/200/sports"; 
  valor_atual: string = '';
  valor_salvo: string = '';
  valor_salvo_blur: string = '';
  is_mouse_over: boolean = false;

  nome: string = 'abc';

  initial_value: number = 15;

  pessoa: any = {
    nome: 'janderclauderson',
    idade: 20
  }

  nome_do_curso: string = 'Angular';

  constructor() { }

  getValor(n = 10) {
    return n
  }

  getCurtirCurso() {
    return true
  }

  clickedButton(){
    alert('Clicked btn')
  }

  onKeyUp(e: KeyboardEvent) {
    // declaring as a HTMLInputElement to user intelisensi and props
    const event = (<HTMLInputElement>e.target);
    this.valor_atual = event.value;
  }

  salvarValor(valor: string) {
    this.valor_salvo = valor;
  }

  salvarValorBlur(valor: string) {
    this.valor_salvo_blur = valor;
  }

  onMouseOverOut(){
    this.is_mouse_over = !this.is_mouse_over;
  }

  onChangeValue(e) {
    console.log(e)
  }

  ngOnInit() {
  }

}
