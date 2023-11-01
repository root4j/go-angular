import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { PrimeModule } from 'src/app/prime.module';

@NgModule({
    imports: [
        CommonModule,
        TaskRoutingModule,
        FormsModule,
        PrimeModule
    ],
    declarations: [TaskComponent]
})
export class TaskModule { }
