import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note:Note={}
  @Output()
  postNote:EventEmitter<Note>=new EventEmitter<Note>();

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }
  saveNote(){
    if(this.note.title)
    this.noteService.postNote(this.note).subscribe({
      next:data=>{
        this.postNote.emit(this.note);
        alert("Note added");
        this.note={};
      },
      error:e=>{
        alert("Failed to note Fruit due to Network Error !! Please Try Again Later")
      }
    })
  
  }

}
