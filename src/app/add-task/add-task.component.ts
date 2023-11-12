import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-taskcomponent.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  newTaskTitle: string = '';
  newTaskText: string = '';
  showAddTaskForm: boolean = false;
  currentId: number = 6;
  editMode: boolean = false;
  editTaskId: number | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id'] && params['edit']) {
        this.editTaskId = +params['id'];
        const existingTask = this.taskService.getTaskById(this.editTaskId);
        if (existingTask) {
          this.newTaskTitle = existingTask.title;
          this.newTaskText = existingTask.text;
          this.editMode = true;
        }
      }
    });
  }

  addTask(): void {
    if (this.newTaskTitle.trim() !== '' && this.newTaskText.trim() !== '') {
      const newNote: Task = {
        id: this.editMode ? this.editTaskId! : this.currentId,
        title: this.newTaskTitle,
        text: this.newTaskText
      };

      if (this.editMode) {
        this.taskService.editTask(newNote);
      } else {
        this.taskService.addTask(newNote);
        this.currentId++;
      }

      this.newTaskTitle = '';
      this.newTaskText = '';
      this.showAddTaskForm = false;
      this.editMode = false;

      this.router.navigate(['/']);
    }
  }
}
