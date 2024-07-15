import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-tile',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './task-tile.component.html',
  styleUrl: './task-tile.component.scss'
})
export class TaskTileComponent implements OnInit {
  @Input() task! : Task;

  ngOnInit(): void {
    this.task = new Task('Manger', 'coder c\'est bien mais il faut reprendre des forces!', new Date('2024-08-01'));
    this.task.setPicture('/assets/tilePictures/burger.png');
    //console.log(this);
  }

  getFlag(): string {
    return this.task.isUrgent?'🚩':'🟢';
  }

  setUrgence():void {
    this.task.isUrgent = !this.task.isUrgent;
  }
}
