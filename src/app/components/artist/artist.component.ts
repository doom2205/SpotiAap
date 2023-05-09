import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/service/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {  
  artista:any={}
  loading:boolean;
  constructor(private router:ActivatedRoute,
              private _spotify:SpotifyService){
                this.loading=true
      this.router.params.subscribe(data=>{
        this.getArtista(data['id'])
      })
  }
  getArtista(id:string){
    this.loading=true
    this._spotify.getArtista(id)
      .subscribe(data=>{
        this.artista=data
        console.log(data);
        this.loading=false
      })
  }

}
