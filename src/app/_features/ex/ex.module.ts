import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExRoutingModule } from './ex-routing.module';
import { ExComponent } from './ex.component';
import { Ex1Component } from './_components/ex1/ex1.component';
import { NbButtonModule, NbIconModule, NbCardModule, NbInputModule, NbListModule, NbDialogService, NbDialogModule, NbSelectModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ex2Component } from './_components/ex2/ex2.component';
import { FormsModule } from '@angular/forms';
import { Ex3Component } from './_components/ex3/ex3.component';
import { Ex3MasterComponent } from './_components/ex3/ex3-master/ex3-master.component';
import { Ex3DetailsComponent } from './_components/ex3/ex3-details/ex3-details.component';
import { PokemonService } from './_services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { Ex4Component } from './_components/ex4/ex4.component';
import { Ex4ChildComponent } from './_components/ex4/ex4-child/ex4-child.component';
import { MeteoService } from './_services/meteo.service';

@NgModule({
  declarations: [ExComponent, Ex1Component, Ex2Component, Ex3Component, Ex3MasterComponent, Ex3DetailsComponent, Ex4Component, Ex4ChildComponent, ],
  imports: [
    CommonModule,
    ExRoutingModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    FormsModule,
    SharedModule,
    NbDialogModule.forChild(),
    HttpClientModule,
    NbSelectModule,
    ChartsModule,
  ],
  providers: [ ]
})
export class ExModule { 
}
