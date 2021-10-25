import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GitResponse } from '../interface/gif-response';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historical : string[] = []; 
  private _apiKey = 'BqAKjFMVAuORR6fsF5W5BNTEPmpNqi1t';
  private _baseUrl = 'https://api.giphy.com/v1/gifs';

  public results: Gif[] = [];
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
    this._historical = JSON.parse(localStorage.getItem('historical')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
    
  }
  
  get historical() {
    return [...this._historical];
  }

  findGifs(query:string) {
    query = query.toLowerCase();
    if(!this._historical.includes( query )) {
      this._historical.unshift( query );
      this._historical = this.historical.splice(0,10);
      localStorage.setItem('historical', JSON.stringify(this.historical));

    }

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('limit', '12')
    .set('q', query);

    this.httpClient.get<GitResponse>(`${this._baseUrl}/search`, { params })
      .subscribe((resp)=>{
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results));
        console.log(this.results);
      });
  }
}
