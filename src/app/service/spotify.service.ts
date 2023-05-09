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
      'Authorization': 'Bearer BQDzoxNDK7yCrA9SJMItoGXirRBqY4cSfRus7iWtGUwEK_as5PWS7Qo_RqfNlWiMJ528b_a7F5O_zVundHJoL7mZBGPSzhliFeENSSN8SKE7OQnPAC7e'
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
