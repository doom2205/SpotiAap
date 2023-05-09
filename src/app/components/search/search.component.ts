import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  
  artista :any []=[]
  
  constructor(private _spotify:SpotifyService){

  }


  buscar(termino:string){
    if(termino.length>=1){
      this._spotify.getArtistas(termino)
        .subscribe((data:any)=>{
          console.log(data);
          this.artista=data
        });

    }
  }
}
