import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  //get meal
  getMeal(letter){
    return this.http.get(`https://themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  }

  //get one meal data
  getOneMeal(id){
    return this.http.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

  //search meal by name
  searchMeal(name){
    return this.http.get(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`)
  }

  getIngredients(){
    return this.http.get(`https://themealdb.com/api/json/v1/1/list.php?i=list`)
  }
  getCountries(){
    return this.http.get(`https://themealdb.com/api/json/v1/1/list.php?a=list`)
  }
  filterByCountry(country){
    return this.http.get(`https://themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  }
}
