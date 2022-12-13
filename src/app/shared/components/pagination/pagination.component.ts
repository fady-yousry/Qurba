import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currPage!: number;
  @Input() lastPage!: number;

  @Output() prev = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();
  @Output() goTo = new EventEmitter<number>();
  pages!: number[];
  constructor() {}
  handlePreviousPage() {
    this.prev.emit();
  }
  handleNextPage() {
    this.next.emit();
  }
  goToPage(page: number) {
    this.goTo.emit(page);
  }
  ngOnInit(): void {
    this.pages = Array.from({ length: this.lastPage }, (_, i) => i + 1);
  }
}
