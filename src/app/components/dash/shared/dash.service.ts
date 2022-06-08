import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

}
