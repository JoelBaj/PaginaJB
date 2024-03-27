import { Component } from '@angular/core';
import { Pais } from '../../../../../07-selectores/src/app/paises/interfaces/paises.interface';


interface MenuItem{
  texto:string;
  ruta:string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    Menu:MenuItem[] =[
      {texto:'Pais', ruta:'/pais/pais'},
      {texto:'Region', ruta:'/pais/region'},
      {texto:'Subregion', ruta:'/pais/subregion'},
      {texto:'Selector', ruta:'/pais/selector'}
      
    ]

    cerrarMenu(){
      
    }
}
