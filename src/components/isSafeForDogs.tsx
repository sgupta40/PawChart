import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';

const isSafeForDogs = (food: string): boolean => {
    const safeFoods = ['carrots', 'broccoli', 'green beans'];
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