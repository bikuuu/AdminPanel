import {Component, OnInit} from '@angular/core';
import {SideNavService} from '../services/side-nav.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoItemInterface} from '../../interfaces/todo-item.interface';
import {TodoServicesService} from '../services/todo-services.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {
  isNavBarOpen: boolean;
  signupForm: FormGroup;
  dateFormat: FormGroup;
  todoFormat: FormGroup;

  todoListData: TodoItemInterface[];

  constructor(private siedeNavService: SideNavService,
              private todoService: TodoServicesService) {
    this.siedeNavService.isOpen.subscribe(isOpen => {
      this.isNavBarOpen = isOpen;
      console.log(isOpen, 'Todo component');
    });
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'number': new FormControl(null, [Validators.required, Validators.maxLength(9), Validators.minLength(9)])
    });

    this.dateFormat = new FormGroup({
      'birthdayDate': new FormControl(null, [Validators.required])
    });

    this.todoFormat = new FormGroup({
      'todoDescription': new FormControl(null, Validators.required)
    });

    this.todoListData = this.todoService.getTodoList();
  }

  onFormSubmit(): void {
    console.log(this.signupForm.value);
  }

  onBirthdayDateFormat(): void {
    console.log(this.dateFormat.value);
  }

  todoAdd(): void {
    const inputValue = this.todoFormat.get('todoDescription').value;
    this.todoService.addTodoItem(inputValue);
  }

  onDeleteClick(index: number): void {
    this.todoService.deleteTodoItem(index);
  }
}
