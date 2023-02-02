import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText:string="";

  @Output()
  searchs:EventEmitter<string>=new EventEmitter<string>();

  search(){
    this.searchs.emit(this.searchText)
  }

  constructor() { }

  ngOnInit(): void {
  }
  
 
}
