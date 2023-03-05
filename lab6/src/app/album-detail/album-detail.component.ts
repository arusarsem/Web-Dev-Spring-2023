import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMS, Album} from "../models";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  // id !: number;
  // data: Album[] = ALBUMS

  album: Album;

  constructor(private route: ActivatedRoute) {
    this.album = {} as Album;
  }

  ngOnInit() {


     this.route.paramMap.subscribe((params ) => {
         const id = Number(this.route.snapshot.paramMap.get('id'));
         this.album = ALBUMS.find((al: Album) => al.id === id ) as Album;
     })

  }


  rm (): void {
      ALBUMS[this.album.id-1] = {} as Album;
  }

}
