import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Endpoint } from '../endpoint';
import { Result } from '../result'


@Component({
  selector: 'app-swapisearch',
  templateUrl: './swapisearch.component.html',
  styleUrls: ['./swapisearch.component.css']
})
export class SwapisearchComponent implements OnInit { 
  endpoint : Endpoint = {
    baseURL : 'https://swapi.co/api/',
    topicURL : '', 
    termURL : ''
  };

  results : Result[];
  

  constructor(private swapiService : SwapiService) { }
    
  ngOnInit() {
    if(this.endpoint.topicURL && this.endpoint.termURL !== null){
      this.getResults()
    }
  }

  getResults(): void {
    this.swapiService.swapiSearch(this.endpoint.topicURL, this.endpoint.termURL)
      .subscribe(results => this.results = results)
  }
}
