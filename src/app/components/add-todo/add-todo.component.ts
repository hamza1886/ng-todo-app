import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface ITodo {
  'd-block': boolean;
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>();

  title: string;
  showErrorMessage: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  setVisible(): ITodo {
    return {
      'd-block': this.showErrorMessage
    };
  }

  onSubmit(): void {
    this.title = this.title.trim();

    if (!this.title) {
      this.showErrorMessage = true;
      return;
    }

    this.showErrorMessage = false;

    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
    this.title = '';
  }
}
