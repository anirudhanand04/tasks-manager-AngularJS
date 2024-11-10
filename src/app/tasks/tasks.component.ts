import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) UserId!: string;

  @Input({required: true}) name!:string;
  isAddingTask = false;
  private taskService: TaskService;

  constructor(taskService: TaskService){
    this.taskService = taskService;
  }

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.UserId);
  }

  // onCompleteTask(id:string){
  //   //this.Tasks = this.Tasks.filter((task) => task.id !== id);
  // }
  
  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseTask(){
    this.isAddingTask = false;
  }

}
