import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styles: [
  ]
})
export class ResultsListComponent {

  constructor(private gifsService: GifsService) { }

  get results() {
    return this.gifsService.results;
  }

}
