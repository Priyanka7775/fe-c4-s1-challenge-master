import { Component, OnInit } from '@angular/core';
import{Note} from '../model/note';
import{NOTE} from '../model/notes'
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-noteview',
  templateUrl: './noteview.component.html',
  styleUrls: ['./noteview.component.css']
})
export class NoteviewComponent implements OnInit {

  notes:Note[]=[];
  searchText(searchText:string){
    this.noteService.getNote().subscribe({
      next:data=>{
        if(searchText|| searchText!==''){
          this.notes=data.filter(data=>data?.title?.includes(searchText));
        }else{
          this.notes=data;
        }
      }
    })
    
  }
 

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.noteService.getNote().subscribe({
      next:data=>{
        this.notes=data
      }
    })
  }
  flag=false;
  open(){
    if(this.flag){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }

}
