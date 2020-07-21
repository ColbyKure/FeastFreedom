import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:2000/api';

  // userController functions
  getUser() { 
    return this.http.get(this.rootURL + '/users'); 
  }
  postUser(user:any) { 
    return this.http.post(this.rootURL + '/users', user); 
  }
  putUser(user:any) { 
    return this.http.put(this.rootURL + '/users/' + user._id, user); 
  }
  deleteUser(userid:String) {
    return this.http.delete(this.rootURL + '/users/' + userid); 
  }
  getUserByID(userid:String) {
    return this.http.get(this.rootURL + '/users/' + userid); 
  }
  getUserByEmail(email:String) {
    return this.http.get(this.rootURL + '/users/email/' + email); 
  }

  // kitchenController functions
  getKitchen() { 
    return this.http.get(this.rootURL + '/kitchens'); 
  }
  postKitchen(kitchen:any) { 
    return this.http.post(this.rootURL + '/kitchens', kitchen); 
  }
  putKitchen(kitchen:any) { 
    return this.http.put(this.rootURL + '/kitchens/' + kitchen._id, kitchen); 
  }
  deleteKitchen(kitchenid:String) {
    return this.http.delete(this.rootURL + '/kitchens/' + kitchenid); 
  }
  getKitchenByID(kitchenid:String) {
    return this.http.get(this.rootURL + '/kitchens/' + kitchenid); 
  }
  getKitchenByEmail(email:String) {
    return this.http.get(this.rootURL + '/kitchens/email/' + email); 
  }

  // authController functions
  signupUser(user:any) {
    return this.http.post(this.rootURL + '/auth/signup', user); 
  }
  authenticateToken(token:String) {
    return this.http.get(this.rootURL + '/auth/authenticate/' + token); 
  }
  authorizeUser(email:String, password:String) {
    return this.http.get(this.rootURL + '/auth/authenticate?email=' + email + '&password=' + password); 
  }
}
