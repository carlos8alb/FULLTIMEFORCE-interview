import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Commit } from 'src/app/models/models';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-commit-card',
  standalone: true,
  imports: [CommonModule, DateAgoPipe],
  templateUrl: './commit-card.component.html',
  styleUrls: ['./commit-card.component.css'],
})
export class CommitCardComponent implements OnInit {
  @Input() commit!: Commit;
  URL_TREE = 'https://github.com/carlos8alb/FULLTIMEFORCE-interview/tree/'

  ngOnInit(): void {
    initFlowbite();
    console.log(this.commit);
  }
}
