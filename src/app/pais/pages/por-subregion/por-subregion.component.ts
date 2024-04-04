import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-subregion',
  templateUrl: './por-subregion.component.html',
  styleUrls: ['./por-subregion.component.css']
})
export class PorSubregionComponent implements OnInit{
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;


  constructor(private paisService: PaisService) { 

  }
  ngOnInit(): void {
    this.paisService.getPais().subscribe((paises)=>{
      this.paises = paises
    })
  }
  

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;


    this.paisService.buscarSubRegion(termino)
      .subscribe((paises) => {
        console.log(paises)
        this.paises = paises;

      },(err)=> {
        this.hayError = true;
        this.paises = []
      }
      );
  }
  sugerencias(termino:string) { 
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarSubRegion(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 10),
        (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido(termino:string) { 
    this.buscar(termino)

  }
}

