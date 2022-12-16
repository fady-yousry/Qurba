import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filtersList:any[]=[];
  @Output() selectedFilter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  filterChecked(event:any){
    this.selectedFilter.emit(event.target.value);
  }

}
