import { Component } from '@angular/core';
import { SpotyserviceService } from '../../services/spotyservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  //Variable donde se almacena el arreglo de datos que viene desde el servicio
  songs:any[] = [] 
  //Variable para controlar el loadin cuando los datos se esten cargando
  loading:any;
  //Variable que controla el error
  error:boolean;
  //Variable que almacena el error para mostrarlo en el componente
  mensajeError:any;

  constructor(private service: SpotyserviceService) {

    this.loading = true;
    
    this.error = false;

    //Consumimos el servicio para obtener los nuevos albums 
    this.service.getNewReleases().subscribe( (data:any) => {
        
        this.songs = data;

        this.loading = false;

      }, (errorService) => {

        this.loading = false;

        this.error = true;

        this.mensajeError = errorService.error.error.message;
         
      });
   }

  

 

}
