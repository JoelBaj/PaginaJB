import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
 
  
  constructor(private paisService:PaisService) { }
  ngOnInit(): void {
       this.activarRegion('america');
  }
  
  getClaseCSS(region:string) : string{ 
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-secondary';
  }

 activarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }


  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;
  
  
    this.paisService.buscarRegion(termino)
      .subscribe((paises) => {
        console.log(paises)
        this.paises = paises;
         this.regionActiva = termino;
  
      },(err)=> {
        this.hayError = true;
        this.paises = [];
        this.regionActiva = '';
      }
      );
  }
  sugerencias(termino:string) { 
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarRegion(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 10),
        (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido(termino:string) { 
    this.buscar(termino)
  }
}
