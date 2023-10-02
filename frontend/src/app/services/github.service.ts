import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Commit, Repository } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private http = inject(HttpClient);
  private URL_REPO = 'http://localhost:3000/api/repository';
  private URL_COMMITS = 'http://localhost:3000/api/repository/commits';

  constructor() {}

  getRepository(): Observable<Repository> {
    return this.http.get<Repository>(this.URL_REPO, {});
  }

  getCommits(): Observable<Commit[]> {
    return this.http.get<Commit[]>(this.URL_COMMITS, {});
  }
}
