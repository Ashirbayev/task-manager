import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TaskService, Task } from '../task.service';
import { Observable } from 'rxjs';
import {EMPTY, of} from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id')!;
        const task = this.taskService.getTaskById(id);
        return task ? of(task) : EMPTY;
      })
    )
      .subscribe((task: any) => {
        this.task = task;
      });
  }

  editTask(taskId: number): void {
    this.router.navigate(['/add-task', { id: taskId, edit: true }]);
  }
}
