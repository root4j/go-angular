import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';
import { User } from 'src/app/business/model/general';
import { Constants } from 'src/app/business/service/common.service';
import { UserService } from 'src/app/business/service/general.service';

@Component({
    templateUrl: './user.component.html',
    providers: [MessageService]
})
export class UserComponent implements OnInit {

    entityDialog: boolean;
    createMode: boolean = false;
    deleteEntityDialog: boolean = false;
    entities: User[];
    entity: User;
    submitted: boolean;
    cols: any[];
    rowsPerPageOptions = [5, 10, 20];
    entityTitle: string = 'User';

    constructor(private mainService: UserService, private messageService: MessageService) { }

    ngOnInit() {
        this.readAll();

        this.cols = [
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'email', header: 'E-mail' },
        ];
    }

    /**
     * Method to show all the objects of the entity
     */
    readAll(): void {
        this.mainService.readAll().subscribe((response: User[]) => {
            this.entities = response;
        });
    }

    /**
     * Method to execute operations after an operation
     * @param deleted Check if it is a delete action
     */
    postSuccess(deleted: boolean) {
        this.readAll();
        if (!deleted) {
            this.entityDialog = false;
        } else {
            this.deleteEntityDialog = false;
        }
        this.newEntity();
    }

    /**
     * Method to create a new object
     * @param obj Object to create
     */
    create(obj: User): void {
        this.mainService.create(obj)
            .pipe(
                catchError(err => {
                    this.messageService.add({ severity: 'error', summary: `${this.entityTitle} error`, detail: `An error occurred when ${Constants.MESSAGE_SNACK_CREATED} => ${err.statusText}!`, life: Constants.SNACK_TIME });
                    throw new Error(err);
                })
            )
            .subscribe(
                _res => {
                    this.messageService.add({ severity: 'success', summary: `${this.entityTitle} ${Constants.MESSAGE_SNACK_CREATE}`, detail: `${this.entityTitle} ${Constants.MESSAGE_SNACK_CREATED} ${Constants.MESSAGE_SNACK_SUCCESSFULLY}!`, life: Constants.SNACK_TIME });
                    this.postSuccess(false);
                });
    }

    /**
     * Method to delete an object
     * @param obj Object to delete
     */
    delete(obj: User): void {
        this.mainService.delete(obj.id)
            .pipe(
                catchError(err => {
                    this.messageService.add({ severity: 'error', summary: `${this.entityTitle} error`, detail: `An error occurred when ${Constants.MESSAGE_SNACK_DELETED} => ${err.statusText}!`, life: Constants.SNACK_TIME });
                    throw new Error(err);
                })
            )
            .subscribe(
                _res => {
                    this.messageService.add({ severity: 'success', summary: `${this.entityTitle} ${Constants.MESSAGE_SNACK_DELETE}`, detail: `${this.entityTitle} ${Constants.MESSAGE_SNACK_DELETED} ${Constants.MESSAGE_SNACK_SUCCESSFULLY}!`, life: Constants.SNACK_TIME });
                    this.postSuccess(true);
                });
    }

    /**
     * Method to update an object
     * @param id Item key
     * @param obj Object to modify
     */
    update(id: number, obj: User): void {
        this.mainService.update(id, obj)
            .pipe(
                catchError(err => {
                    console.error(err);
                    this.messageService.add({ severity: 'error', summary: `${this.entityTitle} error`, detail: `An error occurred when ${Constants.MESSAGE_SNACK_UPDATED} => ${err.statusText}!`, life: Constants.SNACK_TIME });
                    throw new Error(err);
                })
            )
            .subscribe(
                _res => {
                    this.messageService.add({ severity: 'success', summary: `${this.entityTitle} ${Constants.MESSAGE_SNACK_UPDATE}`, detail: `${this.entityTitle} ${Constants.MESSAGE_SNACK_UPDATED} ${Constants.MESSAGE_SNACK_SUCCESSFULLY}!`, life: Constants.SNACK_TIME });
                    this.postSuccess(false);
                });
    }

    newEntity(): void {
        this.entity = {};
    }

    openNew() {
        this.newEntity();
        this.submitted = false;
        this.entityDialog = true;
        this.createMode = true;
    }

    editEntity(entity: User) {
        this.entity = { ...entity };
        this.entityDialog = true;
        this.createMode = false;
    }

    deleteEntity(entity: User) {
        this.deleteEntityDialog = true;
        this.entity = { ...entity };
    }

    confirmDelete() {
        this.delete(this.entity);
    }

    hideDialog() {
        this.entityDialog = false;
        this.submitted = false;
        this.createMode = false;
    }

    saveEntity() {
        this.submitted = true;
        if (this.entity.firstName && this.entity.lastName) {
            try {
                if (this.createMode) {
                    // @ts-ignore
                    this.create(this.entity);
                } else {
                    // @ts-ignore
                    this.update(this.entity.id, this.entity);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}