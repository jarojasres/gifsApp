import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultsListComponent } from './results-list/results-list.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearcherComponent,
    ResultsListComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
