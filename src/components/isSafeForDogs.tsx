import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';

const isSafeForDogs = (food: string): boolean => {
    //Safe Foods list. Make sure list is all lowercase
    const safeFoods = [
      "apples (without seeds)",
      "asparagus",
      "bananas",
      "beef (cooked, lean)",
      "bell peppers",
      "blueberries",
      "broccoli",
      "brussels sprouts",
      "cabbage",
      "cantaloupe",
      "carrots",
      "cauliflower",
      "celery",
      "cheese (in moderation)",
      "chicken (cooked, without bones or skin)",
      "chickpeas",
      "coconut (in moderation)",
      "cottage cheese (in moderation)",
      "cranberries",
      "cucumbers",
      "eggs (cooked, no seasoning)",
      "fish (cooked, no bones)",
      "green beans",
      "honeydew melon",
      "kale",
      "kiwi",
      "mangoes",
      "mushrooms (cooked)",
      "oatmeal (cooked, plain)",
      "oranges (without peel or seeds)",
      "papaya",
      "peanut butter (unsalted)",
      "peas",
      "pineapple (in moderation)",
      "pork (cooked, lean)",
      "potatoes (cooked, plain)",
      "pumpkin (cooked, plain)",
      "quinoa (cooked)",
      "rice (cooked)",
      "salmon (cooked)",
      "spinach",
      "strawberries",
      "sweet potatoes (cooked, plain)",
      "turkey (cooked, without skin)",
      "watermelon (without seeds)",
      "yogurt (unsweetened, no artificial sweeteners)",
      "zucchini",
    ];
    //Not neesed but keeping to implement later
    //const unsafeFoods = ['chocolate', 'grapes', 'onions'];
  
    if (safeFoods.includes(food.toLowerCase())) {
      return true;
    }
  
    //Not Needed but keeping in case to implement later
    /* if (unsafeFoods.includes(food.toLowerCase())) {
      return false;
    } */
  
    return false;
};


  export default isSafeForDogs;