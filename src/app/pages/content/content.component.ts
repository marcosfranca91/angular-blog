import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Input()
  Id: string | null = ""
  @Input()
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";


  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( values =>
      this.Id = values.get("id")
    );

    this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id )[0];

    // if(!result){
      this.contentTitle = result.title;
      this.contentDescription = result.decription;
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
    // }
  }

}
