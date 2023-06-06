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
  top:any[]=[]
  constructor(private router:ActivatedRoute,
              private _spotify:SpotifyService){
                this.loading=true
      this.router.params.subscribe(data=>{
        this.getArtista(data['id'])
        this.getTopTrask(data['id'])
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
  getTopTrask(id:string){
    this._spotify.getTopTrak(id).subscribe(top=>{
      this.top=top[0]
      console.log(this.top);})
  }
 
}
