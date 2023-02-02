import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../model/note';
import { NOTE } from '../model/notes';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  notes=NOTE;
  panelOpenState = false;
 

  @Output()
  hoveredNote:EventEmitter<Note>=new EventEmitter<Note>();
  showDetails(note:any){
    this.hoveredNote.emit(note)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
