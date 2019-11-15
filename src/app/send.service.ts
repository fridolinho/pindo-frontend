import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SendService {
  private username: string;
  private url: string;
  private message: string;

  constructor(private http: HttpClient) {
    this.url = 'http://api.pindo.io/v1/sms/';
  }

  async send(data): Promise<Observable<object>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJub25lIn0.eyJpZCI6MzYsInJldm9rZWRfdG9rZW5fY291bnQiOjJ9.'
      })
    };
    await this.http.post<any>(this.url, data, httpOptions).subscribe(data);
    return data;
  }
}
