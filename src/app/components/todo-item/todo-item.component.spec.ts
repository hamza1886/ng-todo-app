import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../../services/todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
