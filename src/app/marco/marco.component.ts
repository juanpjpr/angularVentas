import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-marco',
  templateUrl: './marco.component.html',
  styleUrls: ['./marco.component.css']
})
export class MarcoComponent implements OnInit {
  ventasActivated: Boolean = false;
  productosActivated: Boolean = false;
  estadisticasActivated: Boolean = false;


  constructor() { }

  ngOnInit() {
  }

 
}
