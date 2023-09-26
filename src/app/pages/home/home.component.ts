import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { NoticiaDTO } from 'src/app/data/noticiaDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  listaNoticias: NoticiaDTO[] = [];

  constructor(){

  }
  
  ngOnInit(): void {
    dataFake.forEach(item => 
      this.listaNoticias.push({
        id:item.id,
        decription: item.decription,
        photoCover: item.photoCover,
        title: item.title
      })
    );

    console.log(this.listaNoticias)
  }

}
