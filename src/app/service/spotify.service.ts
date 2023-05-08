import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor( private http:HttpClient) {

  }

  getQuery(query:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBN54McJHjf_AdJgYfNVqfZDQatMS-a-JV8h8RC1HARQe1lXTxevU95LSp0FzY07I5_Reo3Fs_tq18n9LPRwXTxm5hvTcKL4L7KZ1rQVflPr6vfGnPW'
    })
    const url= `https://api.spotify.com/v1/${query}`
    return this.http.get(url,{headers})

  }
  
  
  getNewRealese(){
    
    return this.getQuery('browse/new-releases')
        .pipe(map((data:any)=> data.albums.items))
  }

  getArtista(termino :string){
    return this.getQuery(`search?query=${ termino }&type=artist&locale=es-AR%2Ces-US%3Bq%3D0.9%2Ces-419%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=50`)
    .pipe(map((data:any)=> data.artists.items));
    
  }
}
