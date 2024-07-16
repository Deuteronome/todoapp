import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'tasks', component: TaskListComponent}
];
