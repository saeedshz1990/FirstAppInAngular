import {Component, OnInit} from '@angular/core';
import {AlbumsServices} from "../albums.services";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {album} from '../interfaces/app.interface';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(
    private albumService: AlbumsServices,
    private route: ActivatedRoute,
    private router: Router) {
  }

  // @ts-ignore
  album: album;
  warningMessage: string = "";

  ngOnInit(): void {
    // this.route.params.subscribe((res) => {
    //   // @ts-ignore
    //   let selectedId: number = +res.id;
    //   setTimeout(() => {
    //     // @ts-ignore
    //     this.album = this.albumService.albums.find(album => album.id === selectedId);
    //     if (!this.album) {
    //       this.router.navigate(['/notFound']);
    //     }
    //   }, 5000)
    // })
    this.route.data.subscribe((data:Data)=>{
      this.album=data['album'];
      }
    );
    this.warningMessage = this.route.snapshot.data['message'];
  }
}
