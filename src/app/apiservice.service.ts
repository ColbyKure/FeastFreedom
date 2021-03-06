import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './models/user';
import { Kitchen } from './models/kitchen';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:2000/api';

  // upload(file:any) {
  //   return this.http.post<any[]>(this.rootURL + '/upload', file)
  //   .pipe(catchError(this.errorHandler));
  // }

  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'src/assets';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.http
  //     .post<any>(endpoint, formData, { headers: null })
  //     .pipe(catchError(this.errorHandler));
  // }

  // userController functions
  getUser(): Observable<User[]> { 
    return this.http.get<User[]>(this.rootURL + '/users')
    .pipe(catchError(this.errorHandler));
  }
  postUser(user:any): Observable<User[]> { 
    return this.http.post<User[]>(this.rootURL + '/users', user)
    .pipe(catchError(this.errorHandler));
  }
  putUser(user:any): Observable<User[]> { 
    return this.http.put<User[]>(this.rootURL + '/users/' + user._id, user)
    .pipe(catchError(this.errorHandler));
  }
  deleteUser(userid:String): Observable<User[]> {
    return this.http.delete<User[]>(this.rootURL + '/users/' + userid)
    .pipe(catchError(this.errorHandler));
  }
  getUserByID(userid:String): Observable<User[]> {
    return this.http.get<User[]>(this.rootURL + '/users/' + userid)
    .pipe(catchError(this.errorHandler));
  }
  getUserByEmail(email:String): Observable<User[]> {
    return this.http.get<User[]>(this.rootURL + '/users/email/' + email)
    .pipe(catchError(this.errorHandler));
  }

  // kitchenController functions
  getKitchen(): Observable<Kitchen[]> { 
    return this.http.get<Kitchen[]>(this.rootURL + '/kitchens')
    .pipe(catchError(this.errorHandler));
  }
  postKitchen(kitchen:any): Observable<Kitchen[]> { 
    return this.http.post<Kitchen[]>(this.rootURL + '/kitchens', kitchen)
    .pipe(catchError(this.errorHandler));
  }
  putKitchen(kitchen:any): Observable<Kitchen[]> { 
    return this.http.put<Kitchen[]>(this.rootURL + '/kitchens/' + kitchen._id, kitchen)
    .pipe(catchError(this.errorHandler));
  }
  deleteKitchen(kitchenid:String): Observable<Kitchen[]> {
    return this.http.delete<Kitchen[]>(this.rootURL + '/kitchens/' + kitchenid)
    .pipe(catchError(this.errorHandler));
  }
  getKitchenByID(kitchenid:String): Observable<Kitchen[]> {
    return this.http.get<Kitchen[]>(this.rootURL + '/kitchens/' + kitchenid)
    .pipe(catchError(this.errorHandler));
  }
  getKitchenByEmail(email:String): Observable<Kitchen[]> {
    return this.http.get<Kitchen[]>(this.rootURL + '/kitchens/email/' + email)
    .pipe(catchError(this.errorHandler));
  }
  addProduct(item:any, kitchenid:String): Observable<Kitchen[]> {
    return this.http.post<Kitchen[]>(this.rootURL + '/kitchens/addItem/'+ kitchenid, item)
    .pipe(catchError(this.errorHandler));
  }
  deleteProduct(itemid:String):Observable<Product[]> {
    return this.http.delete<Product[]>(this.rootURL + '/items/' + itemid)
    .pipe(catchError(this.errorHandler));
  }
  getProductByID(itemid:String): Observable<Product> {
    return this.http.get<Product>(this.rootURL + '/items/' + itemid)
    .pipe(catchError(this.errorHandler));
  }
  putProduct(item:any): Observable<Product[]> { 
    return this.http.put<Product[]>(this.rootURL + '/items/' + item._id, item)
    .pipe(catchError(this.errorHandler));
  }

  // authController functions
  signupUser(user:any): Observable<User[]> {
    return this.http.post<User[]>(this.rootURL + '/auth/signup', user)
    .pipe(catchError(this.errorHandler));
  }
  authenticateToken(token:String): Observable<User[]> {
    return this.http.get<User[]>(this.rootURL + '/auth/authenticate/' + token)
    .pipe(catchError(this.errorHandler));
  }
  authorizeUser (user:any): Observable<User[]> {
    return this.http.post<User[]>(this.rootURL + '/auth/authorize', user)
    .pipe(catchError(this.errorHandler));
  }

  authorizeKitchen (kitchen:any): Observable<Kitchen[]> {
    return this.http.post<Kitchen[]>(this.rootURL + '/kitchens/authorize', kitchen)
    .pipe(catchError(this.errorHandler));
  }




  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
