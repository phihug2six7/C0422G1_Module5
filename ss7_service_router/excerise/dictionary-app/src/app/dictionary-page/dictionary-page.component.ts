import { Component, OnInit } from '@angular/core';
import {Iworld} from "../iworld";
import {DictionaryServiceService} from "../dictionary_service/dictionary-service.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  world: Iworld[] = [];

  constructor(private worldService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.world = this.worldService.getAll();
  }

}
