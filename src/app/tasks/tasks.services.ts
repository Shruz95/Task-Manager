import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TasksService{
   private tasks= [
        {
          id:'t1',
          userId:'u1',
          title:'Master Angular',
          summary:'Learn Angular JS',
          dueDate:'2025-12-31'
        },
        {
          id:'t2',
          userId:'u3',
          title:'Master React JS',
          summary:'Learn React JS',
          dueDate:'2025-12-31'
        },
        {
          id:'t3',
          userId:'u3',
          title:'Master ExpressJS',
          summary:'Learn ExpressJS',
          dueDate:'2025-12-31'
        }
      ];

    constructor(){
        const tasks=localStorage.getItem('tasks');
        if(tasks){
            this.tasks=JSON.parse(tasks);
        }
    }

     getUserTasks(userId:String){
        return this.tasks.filter((task)=> task.userId === userId);
     } 

     addTask(taskData:NewTaskData,userId:string){
        this.tasks.push({
            id:new Date().getTime().toString(),
            userId:userId,
            title:taskData.title,
            summary:taskData.summary,
            dueDate:taskData.date,
          });
          this.saveTasks();
          }

          removeTask(id:string){
            this.tasks=this.tasks.filter((task)=>task.id!== id);
            this.saveTasks();  
        }

          private saveTasks(){
            localStorage.setItem('tasks',JSON.stringify(this.tasks));
          }
}