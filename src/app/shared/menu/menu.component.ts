import { Component } from '@angular/core';

import { Router } from '@angular/router';


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

  constructor() { }
    Menu:MenuItem[] =[
      {texto:'Pais', ruta:'/pais/pais'},
      {texto:'Region', ruta:'/pais/region'},
      {texto:'Sub region', ruta:'/pais/subregion'},
      {texto:'Capital', ruta:'/pais/capital'},
      {texto:'Selector', ruta:'/pais/selector'}
      
    ]

}
