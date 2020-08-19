import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  @Output() itemSelected = new EventEmitter<String>();
  selectedItem;

  showRecipes(selection: string) {
    this.selectedItem = selection;
    this.itemSelected.emit(this.selectedItem);
  }

  showShoppingList(selection: string) {
    this.selectedItem = selection;
    this.itemSelected.emit(this.selectedItem);
  }
}
