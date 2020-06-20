import { Component, OnInit } from '@angular/core';
import { GalleryModel } from 'src/app/interface/gallery-model';
import { GalleryService } from 'src/app/service/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.css']
})
export class GalleryFilterComponent implements OnInit {
  allImages: GalleryModel;
  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImage();
  }

  getLatestImage() {
    this.galleryService.getAllImagesByName().subscribe((response) =>
      this.allImages = response);
  }
}
