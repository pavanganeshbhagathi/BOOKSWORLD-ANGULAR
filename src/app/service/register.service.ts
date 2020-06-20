import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegisterModel } from '../interface/register-model';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(user): Observable<RegisterModel>{
    return this.http.post<RegisterModel>('http://localhost:3000/users', user).pipe(tap(data =>
                                          data), catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

  getAllUsers(): Observable<RegisterModel> {
    return this.http.get<RegisterModel>('http://localhost:3000/users').pipe(tap(data =>
                                         data), catchError(this.errorHandler));
  }
}
