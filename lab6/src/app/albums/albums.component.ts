import {Component, OnInit} from '@angular/core';
import { ALBUMS, Album } from "../models";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  data: Album[] = ALBUMS;

  constructor(){
  }

  ngOnInit() {
  }


}
