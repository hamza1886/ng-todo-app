import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from '../../services/todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

describe('TodosComponent', () => {
  let service: TodoService;
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [TodoService],
      declarations: [TodosComponent, AddTodoComponent]
    }).compileComponents();
    service = TestBed.inject(TodoService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
