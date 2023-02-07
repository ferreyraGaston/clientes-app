import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 public autor: any = {nombre:'Gastón',apellido:'Ferreyra',fecha:'2023'};
  constructor() { }

  ngOnInit(): void {
  }

}
