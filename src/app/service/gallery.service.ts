import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { GalleryModel } from '../interface/gallery-model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<GalleryModel> {
    return this.http.get<GalleryModel>('http://localhost:3000/books').pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  getAllImagesByName(): Observable<GalleryModel> {
    return this.http.get<GalleryModel>('http://localhost:3000/gallery?name=Guitar').pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}

