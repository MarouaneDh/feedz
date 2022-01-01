import { Component, Input, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonSlides) slides: IonSlides;
  @Input('ngModel') name
  alpha=Array.from(Array(26)).map((e,i)=>i+65)
  alphabet=this.alpha.map((x)=>String.fromCharCode(x))
  meals:any[]=[]
  data:any[]=[]
  searchedMeals:any[]=[]
  constructor(
    private dataService:DataService
  ) {}

    ngOnInit():void{
  this.getMeals()
}
  next(){
    this.slides.slideNext();
  }

  prev(){
    this.slides.slidePrev();
  }

    sortAlpha(meals){
      meals.sort(function(a:any,b:any){
        if (a.strMeal < b.strMeal){return -1}
        if (a.strMeal > b.strMeal){return 1}
        return 0
      })
    }

    searchMeal(name){
      this.dataService.searchMeal(name).subscribe(async(res:any)=>{
        this.searchedMeals= await res.meals
        this.meals=this.searchedMeals
        this.sortAlpha(this.meals)
        await console.log(this.searchedMeals)
      })
    }

    getIng(){
      this.dataService.getIngredients().subscribe(async(res:any)=>{
        // await console.log(res)
      })
    }

    getMeals(){
      this.data=[]
      this.alphabet.map((el)=>(
      this.dataService.getMeal(el).subscribe(async(res:any)=>{
      if(res.meals!==null){
        res.meals.forEach(meal => {
        this.data=[]
        this.data=meal
        this.meals.push(this.data)
      });
      this.sortAlpha(this.meals)
      // this.meals.sort()
    }
    // console.log(this.meals.length)
  })
  ))
}




}
