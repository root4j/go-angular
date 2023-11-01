import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'users', loadChildren: () => import('./users/user.module').then(m => m.UserModule) },
        { path: 'tasks', loadChildren: () => import('./tasks/task.module').then(m => m.TaskModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class GeneralRoutingModule { }
