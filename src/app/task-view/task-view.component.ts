import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  tasks: Task[] = [];


  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTask();
  }

  editTask(taskId: number): void {
    this.router.navigate(['/add-task', { id: taskId, edit: true }]);
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }


}
