import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Commit } from 'src/app/models/models';
import { GithubService } from 'src/app/services/github.service';
import { CommitCardComponent } from '../commit-card/commit-card.component';

@Component({
  selector: 'app-commit-list',
  standalone: true,
  imports: [CommonModule, CommitCardComponent],
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  private gitHubService = inject(GithubService);
  commits: Commit[] = [];

  ngOnInit(): void {
    this.gitHubService.getCommits().subscribe((commits) => {
      this.commits = commits;
    });
  }
}
