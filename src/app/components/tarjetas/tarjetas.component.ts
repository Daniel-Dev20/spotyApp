import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  //Obtener datos desde otro componente
  @Input() items:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }


 
}
