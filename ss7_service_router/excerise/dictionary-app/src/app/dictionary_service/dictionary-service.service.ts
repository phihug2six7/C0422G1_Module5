import { Injectable } from '@angular/core';
import {Iworld} from "../iworld";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  worlds: Iworld[] = [
    {world:"hello",mean:"chào em"},
    {world:"trust",mean:"anh tin em"},
    {world:"broken",mean:"anh đau"},
    {world:"bye",mean:"tạm biệt em"}
    ];
  constructor() {}
  translate(wod:string){
    return this.worlds.filter(a=>a.world===wod)[0];
  }
  getAll(){
    return this.worlds;
  }
}
