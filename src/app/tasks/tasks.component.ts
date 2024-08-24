import { Component, Input } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.services';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userId!:string;
@Input({required:true}) name!:string;

isAddingTask:boolean=false;

constructor(private tasksService:TasksService){}


get selectedUserTasks(){
 return this.tasksService.getUserTasks(this.userId);
}


onStartAddTask(){
this.isAddingTask=true;
}

onCloseAddTask(){
  this.isAddingTask=false;
  }


}
