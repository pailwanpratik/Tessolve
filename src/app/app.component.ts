import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dropdownList: { item_id: number, item_text: string }[] = []; // Explicitly typed
  selectedItems: { item_id: number, item_text: string }[] = []; // Explicitly typed
  dropdownSettings: IDropdownSettings = {}; // Provide an initializer
  widgets = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'];
  flowChart: string[] = [];

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'System 1' },
      { item_id: 2, item_text: 'System 2' },
      { item_id: 3, item_text: 'System 3' },
      { item_id: 4, item_text: 'System 4' },
      { item_id: 5, item_text: 'System 5' },
      { item_id: 6, item_text: 'System 6' },
      { item_id: 7, item_text: 'System 7' }
    ];
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.flowChart);
    console.log(this.widgets);
  }
}
