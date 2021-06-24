import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import{Observable} from 'rxjs';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getItemsData():Observable<Item>{
    return this.hc.get <Item>("http://localhost:3000/items")
  }
  getItemsDataById(id):Observable<Item>{
    return this.hc.get <Item>('http://localhost:3000/items/'+id)
  }
  getTopItemsData():Observable<Item>{
    return this.hc.get <Item>("http://localhost:3000/topitems")
  }

  createNewMovie(mobileObj):Observable<any>{
    return this.hc.post("http://localhost:3000/mobiles",mobileObj)
  }
  
}
