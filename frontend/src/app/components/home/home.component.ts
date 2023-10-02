import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommitListComponent } from '../commit-list/commit-list.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CommitListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

}
