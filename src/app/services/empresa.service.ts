import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { EmpresaModel } from '../models/Empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string = `${environment.baseurl}/empresa`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) { }
  getUsuarios(){
    return lastValueFrom(this.http.get(`${this.url}`,{params: {matricula: this.matricula}}));
  }

  postUsuario(empresa: EmpresaModel){
    return lastValueFrom(this.http.post(`${this.url}`, empresa, {params: {matricula: this.matricula}}));
  }

  getUsuario(idEmpresa: string){
    return lastValueFrom(this.http.get(`${this.url}/${idEmpresa}`,{params: {matricula: this.matricula}}))
  }

  getCompanyByFilter(termino: string){
    return lastValueFrom(this.http.get(`${this.url}`, {params:{matricula: this.matricula, termino: termino}}));
  }

  putUsuarios(empresa: EmpresaModel, idEmpresa: String){
    return lastValueFrom(this.http.put(`${this.url}/${idEmpresa}`, empresa, {params: {matricula: this.matricula}}));
  }
 deleteUsuarios(idEmpresa: any) {
  return lastValueFrom(this.http.delete(`${this.url}/${idEmpresa}`, {params: {matricula: this.matricula}}));
    }
}
