import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FriendsModel } from '../interfaces/http.model';
@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private apiURL = `${environment.apiURL}`;
  private userName = `${environment.username}`

  constructor(private http: HttpClient) { }

  public list(): Observable<FriendsModel[]> {
    const url = `${this.apiURL}/users/${this.userName}/followers?per_page=25&page=${1}&order=DESC`;
    return this.http.get<FriendsModel[]>(url);
  }
}
