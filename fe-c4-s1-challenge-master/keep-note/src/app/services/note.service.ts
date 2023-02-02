import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note} from '../model/note'


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  URL:string=" http://localhost:3000/notes"
  constructor(private http:HttpClient) { }

  getNote():Observable<Note[]>{
    return this.http.get<Note[]>(this.URL)
  }

  postNote(note:Note){
    return this.http.post<Note>(this.URL,note)
  }
}
