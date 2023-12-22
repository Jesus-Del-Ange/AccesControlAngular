import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Resident } from '../Interfaces/resident.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getResidents():Observable<Resident[]>{
    return this.http.get<Resident[]>(`${this.baseUrl}/residents`)
  }

  getResidentById(id: number):Observable<Resident|undefined>{
    return this.http.get<Resident>(`${this.baseUrl}/residents/${ id }`)
    .pipe(
      catchError(error=>of(undefined))
    );
  }

  postResident(resident: Resident):Observable<Resident>{
    return this.http.post<Resident>(`${this.baseUrl}/residents`,resident);
  }

  updateResident(resident: Resident):Observable<Resident>{
    if(!resident.id) throw Error('Id requerido')
    return this.http.patch<Resident>(`${this.baseUrl}/residents/${ resident.id }`,resident);
  }
  
  deleteResidentById(id: number):Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/residents/${id}`)
    .pipe(
      catchError(err=> of(false)),
      map(resp => true)
    )
  }
}
