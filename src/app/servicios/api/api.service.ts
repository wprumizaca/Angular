import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login/login.interface';
import { ResponseLoginI } from  '../../modelos/login/responseLogin.interface';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * EndPoint Para Ingresar A Mi Api Gateway
   */
  private url:string= "http://localhost:8090/auth"

  /**
    Encabezado para enviar informacion a los MS con el contenido en formato JSON
   */

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
    
  });

  constructor(private httpClient:HttpClient) { }


// Función
  loginByUsername(form:LoginI):Observable<ResponseLoginI>{
    let direccion = this.url+"/login";
    
    return this.httpClient.post<ResponseLoginI>(direccion, form);  

  }

  // loginByUsername(form:LoginI):Observable<ResponseLoginI>{
  //   let direccion = this.url+"/login";
    
  //   return this.httpClient.post<ResponseLoginI>(direccion, form)
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
  //         // Aquí puedes acceder a los errores personalizados enviados por tu API RESTful
  //         if (!(error.error instanceof ErrorEvent)) {
  //           // Error de la API RESTful
  //           console.error('Error de la API RESTful:', error.status, error.error);
  //         }
          
  //         return throwError(() => error);
  //     })
  //   );
    

  // }
} 
