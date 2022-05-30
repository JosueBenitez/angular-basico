import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  template: `
      <h1>{{titulo}}</h1>
      <button (click)="acumular(1)">+1</button>
      <span>{{numero}}</span>
      <button (click)="acumular(-1)">-1</button>
  `
})
export class AppComponent {
  public titulo: string = 'Mi-App';
  public numero : number = 0;
  public base : number = 5;
  acumular(valor : number){
    this.numero+= valor;
  };

}
