import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  data: any = [];

  ngOnInit() {
    this.gitHubService.getCommits().subscribe((resp) => (this.data = resp));
  }
}
