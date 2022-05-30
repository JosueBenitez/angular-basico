import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
    heroes : string[] = ['Spiderman','Iroman', 'Hulk', 'Thor']; 
    heroeborrado : string = '';
    status : boolean = false;

    borrarHeroe() : void{
      this.heroeborrado =  this.heroes.pop() || '';
      if(this.heroeborrado != ''){
        this.status = true;
      }else{
        this.status = false;
      }
    }
}
