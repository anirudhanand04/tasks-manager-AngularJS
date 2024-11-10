import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string; 
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<NewTaskData>();


  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  //approach to constructor based
  private taskService = inject(TaskService);
  
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');
  
  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    // this.submit.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDueDate,
    // });
    this.taskService.addTask({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date: this.enteredDueDate
    }, '');
    this.close.emit();
  }

}
