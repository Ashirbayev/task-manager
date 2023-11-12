import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {AddTaskComponent} from './add-task/add-task.component';

const routes: Routes = [
  { path: '', component: TaskViewComponent },
  { path: 'task-detail/:id', component: TaskDetailComponent },
  { path: 'add-task', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
