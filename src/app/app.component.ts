import { Component } from '@angular/core';
import { Task } from './models/task';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskListComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
 
}
