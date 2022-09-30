import { Component, OnInit } from '@angular/core';
import {Iworld} from "../iworld";
import {DictionaryServiceService} from "../dictionary_service/dictionary-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  word: Iworld= {};
  constructor(private activatedRoute: ActivatedRoute,private quat:DictionaryServiceService) {
    activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const keyWord =paramMap.get('word');
      this.word=this.quat.translate(keyWord);
    })
  }
  ngOnInit(): void {
  }

}
