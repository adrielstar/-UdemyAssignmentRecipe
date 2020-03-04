import {Component, OnInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRf: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRf: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRf.nativeElement.value;
    const ingAmount = this.amountInputRf.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
