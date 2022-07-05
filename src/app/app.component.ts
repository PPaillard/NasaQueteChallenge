import { Component, OnInit } from '@angular/core';
import { ImageOfTheDay } from './imageOfTheDay.model';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  imgOfTheDay: ImageOfTheDay | undefined
  constructor(private nasaService:NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(
      (imageOfTheDay:ImageOfTheDay) => {
        this.imgOfTheDay = imageOfTheDay
      }
    )
  }
}
