import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorSubregionComponent } from './pages/por-subregion/por-subregion.component';
import { InfPaisComponent } from './pages/inf-pais/inf-pais.component';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'pais', component:PorPaisComponent},
      {path:'region', component:PorRegionComponent},
      {path:'subregion', component:PorSubregionComponent},
      {path:':id', component:InfPaisComponent},
      {path:'selector', component:SelectorPageComponent},
      {path:'**', redirectTo:'pais' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
