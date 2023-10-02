import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Commit } from 'src/app/models/models';
import { GithubService } from 'src/app/services/github.service';
import { CommitCardComponent } from '../commit-card/commit-card.component';
import { ListFooterComponent } from '../list-footer/list-footer.component';

@Component({
  selector: 'app-commit-list',
  standalone: true,
  imports: [CommonModule, CommitCardComponent, ListFooterComponent],
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  private gitHubService = inject(GithubService);
  groupedCommits: Map<string, Commit[]> = new Map();
  groupedCommitsSorted: Map<string, Commit[]> = new Map();

  ngOnInit(): void {
    this.gitHubService.getCommits().subscribe((commits) => {
      const commitsSortedByDate = commits.sort((a, b) =>
        a.commit.committer.date < b.commit.committer.date ? -1 : 1
      );

      this.groupedCommits = commitsSortedByDate.reduce((entryMap, commit) => {
        const groupByDate = commit.commit.committer.date
          .toString()
          .slice(0, 10);
        return entryMap.set(groupByDate, [
          commit,
          ...(entryMap.get(groupByDate) || []),
        ]);
      }, new Map());

      this.groupedCommitsSorted = new Map(
        [...this.groupedCommits].sort((a, b) => (a < b ? 1 : -1))
      );

    });
  }

  returnZero() {
    return 0
  }
}
