import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Class where all the constants that the application manages are.
 */
export class Constants {
    public static MODAL_TAMANO_PEQUENO: string = "40%";
    public static MODAL_TAMANO_MEDIANO: string = "60%";
    public static MODAL_TAMANO_GRANDE: string = "80%";

    public static MENSAJE_CONFIRMAR_ELIMINAR: string = 'Esta seguro que desea eliminar el registro?';
    public static MENSAJE_EXITO_CREAR: string = 'Registro creado exitosamente!';
    public static MENSAJE_EXITO_EDITAR: string = 'Registro actualizado exitosamente!';
    public static MENSAJE_EXITO_ELIMINAR: string = 'Registro eliminado exitosamente!';
    public static MENSAJE_ADVERTENCIA_SELECCION: string = 'Debes seleccionar un registro primero!';
    public static MENSAJE_TITULO_CONFIRMACION: string = 'Confirmación';
    public static MENSAJE_TITULO_CREAR: string = 'Crear';
    public static MENSAJE_TITULO_EDITAR: string = 'Actualizar';
    public static MENSAJE_TITULO_ELIMINAR: string = 'Eliminar';
    public static MENSAJE_TITULO_SELECCION: string = 'Seleccionar';
    public static MENSAJE_TITULO_SNACK_ERROR: string = 'Error';

    public static SNACK_TIME: number = 5000;
    public static TITLE_SNACK_ERROR: string = 'error';
    public static TITLE_SNACK_SUCCESS: string = 'success';
    public static MESSAGE_SNACK_SUCCESSFULLY: string = 'successfully';
    public static MESSAGE_SNACK_CREATE: string = 'create';
    public static MESSAGE_SNACK_UPDATE: string = 'update';
    public static MESSAGE_SNACK_DELETE: string = 'delete';
    public static MESSAGE_SNACK_CREATED: string = 'created';
    public static MESSAGE_SNACK_UPDATED: string = 'updated';
    public static MESSAGE_SNACK_DELETED: string = 'deleted';

    public static API_ENDPOINT: string = '/';

    public static HTTP_OPTIONS: any = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    };

    public static getMessageFromError(err: string): string {
        if (err.length > 500) {
            return err.substring(0, 500) + '...';
        } else {
            return err;
        }
    }
}

/**
 * Class with basic CRUD operations.
 */
export class Crud<T> {
    protected readonly apiUrl = `${this.baseUrl}${this.uriComplement}`;
    constructor(
        protected readonly http: HttpClient,
        protected readonly uriComplement: string,
        protected readonly baseUrl: string = Constants.API_ENDPOINT
    ) { }

    create(body: T): Observable<T> {
        return this.http.post<T>(this.apiUrl, body);
    }

    delete(id: any): Observable<T> {
        const url = this.entityUrl(id);
        return this.http.delete<T>(url);
    }

    read(id: any): Observable<T> {
        const url = this.entityUrl(id);
        return this.http.get<T>(url);
    }

    readAll(): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl);
    }

    update(id: any, body: T): Observable<T> {
        const url = this.entityUrl(id);
        return this.http.put<T>(url, body);
    }

    protected entityUrl(id: any): string {
        return [this.apiUrl, id].join('/');
    }
}