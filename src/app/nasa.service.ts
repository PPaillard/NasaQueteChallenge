import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageOfTheDay } from './imageOfTheDay.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  keyAPI = environment.keyAPI
  urlAPI = environment.urlAPI

  constructor(private httpClient: HttpClient) { }

  getImageOfTheDay(): Observable<ImageOfTheDay> {
    return this.httpClient.get<ImageOfTheDay>(`${this.urlAPI}?api_key=${this.keyAPI}`)
  }
}
