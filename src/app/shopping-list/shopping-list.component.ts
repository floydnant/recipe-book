import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("apples"),
    new Ingredient("tomatoes", 10),
    new Ingredient("banana", 10),
    new Ingredient("banana2", 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
