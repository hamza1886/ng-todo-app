import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService} from '../../services/todo.service';
import { Todo } from '../../models/Todo';

interface ITodo {
  'is-complete': boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  setClasses(): ITodo {
    return {
      'is-complete': this.todo.completed
    };
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(currentTodo => {
      console.log(currentTodo);
    });
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }
}
