import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Country } from '../interfaces/pais.interfaces';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = environment.baseUrl;
  get httpParams() { 
    return new HttpParams().set('fields', 'name,region,subregion,capital,cca2,flags,population');
  }
  constructor(private http:HttpClient) { }
  buscarPais(termino: string): Observable<Country[]> { 
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams});
  }

 buscarRegion(region: string): Observable<Country[]> { 
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{ params: this.httpParams})
  }

  buscarSubRegion(termino: string): Observable<Country[]> { 
    const url = `${this.apiUrl}/subregion/${termino} `;
   return this.http.get<Country[]>(url);
  }
  getInfPais(id: string): Observable<Country> { 
    const url = `${this.apiUrl}/alpha/${id}`;
     return this.http.get<Country>(url);
     
  }
  getPais(): Observable<Country[]> { 
    const url = `${this.apiUrl}/all`;
   return this.http.get<Country[]>(url,{ params: this.httpParams})
  }

  //Selectores
  private _regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  get regiones() {
    return [...this._regions];
  }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]>{

    const URL =  `${ this.apiUrl }/region/${ region }?fields=name,cca3`
    return this.http.get<PaisSmall[]>(URL)
  }

  getPaisPorCodigo(codigo: string): Observable<Pais[] | null>{

    if(!codigo) return of(null)

    const URL = `${ this.apiUrl }/alpha/${ codigo }`
    return this.http.get<Pais[]>(URL)
  }

  getPaisPorCodigoSmall( codigo: string ): Observable<PaisSmall>{
    const URL = `${ this.apiUrl }/alpha/${ codigo }?fields=cca3,name`
    return this.http.get<PaisSmall>(URL)
  } 

  getPaisesPorCodigos( borders: string[]): Observable<PaisSmall[]>{
    if(!borders) return of([])
    const peticiones: Observable<PaisSmall>[] = []

    borders.forEach(codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo)
      peticiones.push(peticion)
    })

    return combineLatest(peticiones)
  }

}
