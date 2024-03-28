import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-inf-pais',
  templateUrl: './inf-pais.component.html',
  styleUrls: ['./inf-pais.component.css']
})
export class InfPaisComponent implements OnInit {
  
  
  pais: Country[] = []
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService
  ){ 
    
  }
 ngOnInit(): void {
  this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.paisService.getInfPais(id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais);
}
}