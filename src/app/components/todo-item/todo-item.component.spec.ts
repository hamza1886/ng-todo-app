import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../../services/todo.service';

describe('TodoItemComponent', () => {
  let service: TodoService;
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
      declarations: [TodoItemComponent]
    }).compileComponents();
    service = TestBed.inject(TodoService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = {id: 1, title: 'Test', completed: true};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.todo).toEqual({id: 1, title: 'Test', completed: true});
  });
});
