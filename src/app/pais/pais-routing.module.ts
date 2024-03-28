import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorSubregionComponent } from './pages/por-subregion/por-subregion.component';
import { InfPaisComponent } from './pages/inf-pais/inf-pais.component';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'pais', component:PorPaisComponent},
      {path:'region', component:PorRegionComponent},
      {path:'subregion', component:PorSubregionComponent},
      { path: 'capital', component: PorCapitalComponent },
      {path:'selector', component:SelectorPageComponent},
      {path:':id', component:InfPaisComponent},
      {path:'**', redirectTo:'pais' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
