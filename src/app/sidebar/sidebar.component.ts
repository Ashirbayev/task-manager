import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTask();
  }











}
