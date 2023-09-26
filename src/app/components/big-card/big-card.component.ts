import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = "https://portaledicase.com/wp-content/uploads/2023/05/Star-Wars.jpg";
  @Input()
  cardTitle: string = "Novo Star-Wars";
  @Input()
  cardDescription: string = "novo filme da seria é lindu, novo filme da seria é lindu, novo filme da seria é lindu novo filme da seria é lindu, novo filme da seria é lindu, novo filme da seria é lindu novo filme da seria é lindu, novo filme da seria é lindu, novo filme da seria é lindu";
  @Input()
  Id: string = "0";

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
