import { Component } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  menu: String = "recipes";

  currentRecipe: Recipe;

  showMenu(selectedMenu: String) {
    this.menu = selectedMenu;
    console.log(selectedMenu);
  }

  receiveRecipeDetail(recipeInfo: Recipe) {
    this.currentRecipe = recipeInfo;
  }
}
