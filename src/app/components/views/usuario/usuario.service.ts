import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario-read-all/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByCategoria(id_cat: String): Observable<Usuario[]> {
    const url = `${this.baseUrl}/usuarios?categoria=${id_cat}`
    return this.http.get<Usuario[]>(url)
  }
}
