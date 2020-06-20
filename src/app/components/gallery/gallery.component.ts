import { Component, OnInit } from '@angular/core';
import { GalleryModel } from 'src/app/interface/gallery-model';
import { GalleryService } from 'src/app/service/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  allImages: GalleryModel;
  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImage();
  }

  getLatestImage(){
    this.galleryService.getAllImages().subscribe((response) =>
    this.allImages = response);
  }
}
