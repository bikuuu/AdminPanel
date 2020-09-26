import {Injectable} from '@angular/core';
import {TodoItemInterface} from '../../interfaces/todo-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {
  todoList: TodoItemInterface[] = [
    {
      description: 'My first Todo',
      isDone: false,
      date: new Date()
    },
    {
      description: 'My second Todo',
      isDone: false,
      date: new Date()
    }
  ];

  constructor() {
  }

  getTodoList(): TodoItemInterface[] {
    return this.todoList;
  }

  addTodoItem(todoDescription: string): void {
    const newItem: TodoItemInterface = {
      description: todoDescription,
      isDone: false,
      date: new Date()
    };
    this.todoList.push(newItem);
    // console.log(newItem, 'new item');
  }

  deleteTodoItem(index: number): void {
    this.todoList.splice(index, 1);
  }

}
