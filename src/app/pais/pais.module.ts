import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { InfPaisComponent } from './pages/inf-pais/inf-pais.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorSubregionComponent } from './pages/por-subregion/por-subregion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';



@NgModule({
  declarations: [
    PaisInputComponent,
    PaisTablaComponent,
    InfPaisComponent,
    PorPaisComponent,
    PorRegionComponent,
    PorSubregionComponent,
    SelectorPageComponent,
    PorCapitalComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    InfPaisComponent,
    PorPaisComponent,
    PorRegionComponent,
    PorSubregionComponent,
    SelectorPageComponent,
    PorCapitalComponent
  ]
})
export class PaisModule { }
