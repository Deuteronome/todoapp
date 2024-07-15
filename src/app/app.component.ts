import { Component } from '@angular/core';
import { TaskTileComponent } from './task-tile/task-tile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskTileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
