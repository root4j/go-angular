import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PrimeModule } from 'src/app/prime.module';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        PrimeModule
    ],
    declarations: [UserComponent]
})
export class UserModule { }
