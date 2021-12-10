import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/image.model';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() item: Item | null;
  @Output() isClicked: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.isClicked.emit();
  }

}
