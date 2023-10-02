import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit, Repository } from '../models/models';
import { config } from '../config';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private http = inject(HttpClient);
  private URL_REPO = config.URL_REPO;
  private URL_COMMITS = config.URL_COMMITS;

  constructor() {}

  getRepository(): Observable<Repository> {
    return this.http.get<Repository>(this.URL_REPO, {});
  }

  getCommits(): Observable<Commit[]> {
    return this.http.get<Commit[]>(this.URL_COMMITS, {});
  }
}
