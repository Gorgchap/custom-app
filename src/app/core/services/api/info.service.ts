import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileInfo } from '@app/core/models/api';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private api = 'https://aws.random.cat/meow';

  constructor(private http: HttpClient) {}

  getInfo(): Observable<FileInfo> {
    return this.http.get<FileInfo>(`${this.api}`);
  }
}
