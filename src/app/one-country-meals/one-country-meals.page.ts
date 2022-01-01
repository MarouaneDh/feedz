import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-one-country-meals',
  templateUrl: './one-country-meals.page.html',
  styleUrls: ['./one-country-meals.page.scss'],
})
export class OneCountryMealsPage implements OnInit {
  public country:string
  meals:any[]=[]
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.country=this.route.snapshot.paramMap.get('country')
    console.log(this.country)
    this.getMeals(this.country)
  }
  getMeals(country){
      this.dataService.filterByCountry(country).subscribe(async(res:any)=>{
        this.meals=await res.meals
        console.log(this.meals)
      })
    }

}
