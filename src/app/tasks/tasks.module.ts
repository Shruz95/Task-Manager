import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { AppComponent } from "../app.component";
import { SharedModule } from "../Shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent,TaskComponent,NewTaskComponent],
    exports:[TasksComponent],
    imports:[SharedModule,CommonModule,FormsModule]
})
export class TasksModule{

}