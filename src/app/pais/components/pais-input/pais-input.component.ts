import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {
   @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // se va a emitir cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string= '';
  debouncer: Subject<string> = new Subject;
  
  termino: string = '';
  // se dispara una unica vez cuando el componente es creado
  //.pipe(debounceTime(300) son la espera
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor)
      });
  }

  buscar() { 
    this.onEnter.emit(this.termino);
  }
  //emitir el siguiente valor con next
  teclaPresionada() { 
    this.debouncer.next(this.termino);

  }
}
