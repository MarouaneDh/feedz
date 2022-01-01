import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.page.html',
  styleUrls: ['./meal-details.page.scss'],
})
export class MealDetailsPage implements OnInit {
  public id:string
  meal:any=[]
  videoString:string
  videoStringsArray:any[]
  constructor(private route:ActivatedRoute,
    private dataService:DataService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.getThisMeal(this.id)
  }

  getEmbededVideo(meal){
    this.videoString=meal.strYoutube
    this.videoStringsArray=this.videoString.split("=")
    console.log(this.videoStringsArray)
  }

  getThisMeal(id){
    this.dataService.getOneMeal(id).subscribe(async(res:any)=>{

        this.meal= await res.meals[0]
        await console.log(this.meal)
        this.getEmbededVideo(this.meal)
      })
  }

}
