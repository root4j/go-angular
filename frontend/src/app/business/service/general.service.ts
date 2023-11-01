import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Task } from '../model/general';
import { Crud } from './common.service';


@Injectable({
    providedIn: 'root'
})
export class TaskService extends Crud<Task> {
    constructor(protected override http: HttpClient) {
        super(http, 'api/tasks');
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserService extends Crud<User> {
    constructor(protected override http: HttpClient) {
        super(http, 'api/users');
    }
}