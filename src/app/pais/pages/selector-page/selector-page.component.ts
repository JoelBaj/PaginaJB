import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, tap, switchMap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

   //public flag = false;

  miFormulario: FormGroup = this._fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]],
  });
   //ui
  cargando: boolean = false;

  paises = new Observable<PaisSmall[]>();
   //paises: PaisSmall[] = [];
  borders = new Observable<PaisSmall[]>();

  public regions: string[] = [];

  constructor(private _fb: FormBuilder,
    private paisesService: PaisService) { }

  ngOnInit(): void {
    this.regions = this.paisesService.regiones;

    //Cuando cambie la region
    this.paises = this.miFormulario?.controls['region']?.valueChanges.pipe(
      tap((_) => {
        this.miFormulario?.controls['pais']?.reset('');
        this.cargando = true;
      }),
      switchMap((region) => {
        return this.paisesService.getPaisesPorRegion(region);
      }),
      tap((_) => (this.cargando = false))
    );

    //Cuando cambie el pais
    this.borders = this.miFormulario?.controls['pais']?.valueChanges.pipe(
      tap((_) => {
        this.miFormulario?.controls['frontera']?.reset('');
         this.cargando = true;
      }),
      switchMap((code) => this.paisesService.getPaisPorCodigo(code)),
      switchMap((pais) => {
        const country = pais?.[0].borders || [];
        return this.paisesService.getPaisesPorCodigos(country);
      }),
      tap((_) => {
         this.cargando = false;
      }));
  }

  guardar(): void {
    console.log(this.miFormulario.value);
  }
}
