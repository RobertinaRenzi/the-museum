import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Item } from '../models/image.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @ViewChild('myDiv') myDiv: ElementRef;
  @ViewChild('img') img: ElementRef;

  @Input() activeItem: Item | null;
  @Output() onCollapseChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onCollapseChange.emit(true);
  }

  show(index: number) {
    const width = index * this.img.nativeElement.offsetWidth;
    this.myDiv.nativeElement.setAttribute("style", "transform: translate(" + -width + "px,0)");
  }

}
