import { Component, OnInit } from '@angular/core';
import { TaskTileComponent } from '../task-tile/task-tile.component';
import { NgClass } from '@angular/common';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskTileComponent,
    NgClass
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  taskList! : Task[];

  constructor (private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }
}
