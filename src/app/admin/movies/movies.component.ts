import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Item} from 'src/app/models/item.model';
import {DataService} from 'src/app/data.service' ;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  myData:Item;
  constructor(private itemObj:DataService , private ar:ActivatedRoute) { }

  ngOnInit(): void {
 
    let id=this.ar.snapshot.params.id;
    this.itemObj.getItemsDataById(id).subscribe(
      items=>{
        this.myData=items;
      },
      err=>{
        console.log("error is ",err)
      }

    )

  }

}
