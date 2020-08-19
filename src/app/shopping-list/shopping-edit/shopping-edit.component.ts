import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName") inputName: ElementRef;
  @ViewChild("inputAmount") inputAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  addrecipe() {
    const ingName = this.inputName.nativeElement.value;
    const ingAmount = this.inputAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
