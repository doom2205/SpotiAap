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
      //clave token dada por spotify expira cada 1 hora
      'Authorization': 'Bearer BQAaVqGs1Hk19R48199X5lgghv7Q7fkP-RQ0Ehc2ReJhiJ2UQyErKS08V-kCBrK935xIu8FqTwJXwD4enKGtR_RRYbOMUfOn9rJ-v1hzupXw91G3R1c'
    })
    const url= `https://api.spotify.com/v1/${query}`
    return this.http.get(url,{headers})

  }
  
  
  getNewRealese(){
    
    return this.getQuery('browse/new-releases?country=AR&locale=es-AR%2Ces-US%3Bq%3D0.9%2Ces-419%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=48')
        .pipe(map((data:any)=> data.albums.items))
  }

  getArtistas(termino :string){
    return this.getQuery(`search?query=${ termino }&type=artist&locale=es-AR%2Ces-US%3Bq%3D0.9%2Ces-419%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=50`)
    .pipe(map((data:any)=> data.artists.items));
    
  }
  getArtista(id :string){
    return this.getQuery(`artists/${id}`)    
  }
  getTopTrak(id :string){
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
      .pipe(map((data:any)=>[data['tracks']]))  
  }
}
