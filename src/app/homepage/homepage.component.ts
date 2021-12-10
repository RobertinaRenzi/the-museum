import { Component, OnInit } from '@angular/core';
import { IMAGES_MOCK } from '../mock/images.response';
import { Item } from '../models/image.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public items: Item[] = IMAGES_MOCK;
  public activeItem: Item | null;
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(item: Item) {
    this.isCollapsed = false;
    this.activeItem = item;
  }

  public onCollapseChange(event: boolean) {
    this.isCollapsed = event;
  }

}
