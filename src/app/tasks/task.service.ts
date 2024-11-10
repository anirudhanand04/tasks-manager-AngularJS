import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
    private Tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ];

    constructor(){
        const tasks = localStorage.getItem('tasks');
        
        if(tasks){
            this.Tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(UserId: string){
        return this.Tasks.filter((task) => task.userId == UserId);
    }

    addTask(taskData: NewTaskData, UserId: string){
        this.Tasks.push({
            id: new Date().getTime.toString(),
            userId: UserId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        this.saveTasks();
    }

    removeTask(UserId: string){
        this.Tasks = this.Tasks.filter((task) => task.id !== UserId);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.Tasks));
    }

}