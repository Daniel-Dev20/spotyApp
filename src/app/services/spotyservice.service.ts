import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotyserviceService {

  constructor(private http: HttpClient) { }

  //Función de servicio para reutilizar codigo al hacer la peticion con la misma url y los
  getQuery = (query:string) => {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQCVVvZ80WO84S9ZzXm1tq4V8hyY8QzqxWFmG18DhHIr93BW4jDy_nTQqKiyWUfrhaV08SfzFcUqRYTxiL0'
    });

    return this.http.get(url, {headers})

  }

  //Función de servicio que obtiene los nuevos albums
  getNewReleases = () => {

    return this.getQuery('browse/new-releases?country=sv&limit=20')
        .pipe(map((data:any) => data.albums.items))
  }

  //Función  de servicio que obtiene las categorias
  getCategories = () => {
    return this.getQuery('browse/featured-playlists?country=sv&locale=sv&limit=20')
        .pipe(map((data:any) => data.playlists.items))
  }


  //Función de servicio que obtiene datos de los artistas 
  getArtists = (artist:string) => {

   return this.getQuery(`search?q=${artist}&type=artist&limit=20`)
              .pipe(map((data:any) => data.artists.items));
  }


  //Función de servicio que obtiene datos de un solo artista por ID
  getArtist = (id:any) => {
   return  this.getQuery(`artists/${id}`)
  }

  //Función de servicio que obtiene canción de un artista por ID
  getTopTrack = (id:string) => {
    return this.getQuery(`artists/${id}/top-tracks?market=sv`)
                .pipe(map ((data:any) => data.tracks))
  }

}
