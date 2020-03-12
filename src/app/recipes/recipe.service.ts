import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('DOUBLE WHOPPER',
      'Double Burger',
      'https://pluspng.com/img-png/burger-png-burger-free-download-png-png-image-2126.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French', 20),
      ]),
    new Recipe('Crusty Hamburgers Buns',
      'Hamburger Buns with Honey',
      'https://1.bp.blogspot.com/-p6RPzcsNJ90/UMdss1D2FpI/AAAAAAAAExw/pJnsl-nv6yk/s988/Hamburger+Buns.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 8),
      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
