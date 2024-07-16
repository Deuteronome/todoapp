import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-tile',
  standalone: true,
  imports: [
    DatePipe,
    NgStyle,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './task-tile.component.html',
  styleUrl: './task-tile.component.scss'
})
export class TaskTileComponent implements OnInit {
  @Input() task! : Task;
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
   
   
  }

  getFlag(): string {
    return this.task.isUrgent?'🚩':'🟢';
  }

  setUrgence():void {
    this.taskService.changeUrgenceById(this.task.id);
  }
}
