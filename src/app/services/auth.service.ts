import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:7123/api/"
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel): Observable<SingleResponseModel<TokenModel>>{
    let newPath = this.apiUrl + "auth/login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){ // eğer localstorage'da token varsa true döner yoksa false döner
      return true
    }
    else{
      return false
    }
  }
}


