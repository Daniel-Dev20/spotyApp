import { Component } from '@angular/core';
import { SpotyserviceService } from '../../services/spotyservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artists:any[] = [];
  
  loading:any;

  categories:any[] = [];

  error: any;

  mensajeError:any;

  constructor(private spotyService:SpotyserviceService, private router:Router) { 

    this.getCategory();
  }

 
  //Función que viene desde el componente para buscar un artista
  searchArtist = (text:string) => {



    this.loading = true;

     this.spotyService.getArtists(text).subscribe(data => {
     
       this.artists = data;

       this.loading = false;

     })
  }


  //Función que redirige al componente de artista para ver su información
  seeArtist = (id:string) => {

    this.router.navigate(['/artist', id]);

  }

  //Función que consume el servicio para obtener las categorias
  getCategory = () => {

    this.error = false;

    this.spotyService.getCategories().subscribe(categories => {

      this.categories = categories;
    }, (errorServicio) => {

        this.error = true;

        this.loading = false;

        this.mensajeError = errorServicio.error.error.message;
        

    });
  }

}
