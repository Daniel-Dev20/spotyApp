import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyserviceService } from '../../services/spotyservice.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  {

  artist:any = {};
  loading:any;
  topTracks:any[] = [];
  constructor(private activatedRoute:ActivatedRoute, private spotyService:SpotyserviceService) { 

    //Almacenamos el ID que viene desde una url
    this.activatedRoute.params.subscribe(params => {

      this.getArtist(params.id);

      this.getTopTrack(params.id);
    })
    
  }

  //Función que consume el servicio para obtener un artista con ID
  getArtist = (id:any) => {

    this.loading = true;

    this.spotyService.getArtist(id).subscribe(artist => {

      this.artist = artist;

      this.loading = false;
    })
    
  }

  //Función que consume el servicio para obtener las canciones de un artista
  getTopTrack = (id:string) => {
    this.spotyService.getTopTrack(id).subscribe(track => {
    
      this.topTracks = track;
      
    })
  }

  
}
