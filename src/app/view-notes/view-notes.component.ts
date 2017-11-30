import {Component,OnInit } from '@angular/core';
import {NotesService } from '../notes.service';
import {Notes} from '../notes';
import {dateFormatPipe} from '../common/pipes';

@Component({
  selector: 'view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css'],
  providers: [NotesService]
})

export class ViewNotesComponent implements OnInit {
  title = '';
  user : string = '';
  addNote : string = '';
  notes : Notes;
  successMsg : string = '';
  errorMsg : any;
  messageToDisplayInModal : string = '';
  date = new Date();
  noErrors : boolean = true;
  disableClicks : boolean = false;

  constructor(private notesService: NotesService) { }

  ngOnInit() : void {
    this.getWelcomeMsg();
  }

   getWelcomeMsg(){
   	this.notesService.getWelcomeMsg()
  		.subscribe( data => {
  				   data;
             this.successMsg = data.message;
  	 },
      error => {
        error;
        this.showError(error._body);
      }
     )
   }

   addUser(userName : string){
   	this.notesService.getNotes(userName)
  		.subscribe( data => {
  				   data;	
                this.notes = data.responseData;
                this.messageToDisplayInModal = data.message;
                console.log(data);
   	 },
      error => {
        error;
        this.showError(error._body);
      })
   }


   addNotes(text : string,user : string){
   	var obj = {
   		"dateFromClient" : new Date().getTime(),
   		"text" : text,
   		"userName" : user
   	}

   	this.notesService.addNotes(obj)
  		.subscribe( data => {
  				   data;	
                this.successMsg = data.status;
                if("Success" === data.status){
                	this.notes = data.responseData;
                }
  	 },
      error => {
        error;
        this.showError(error._body);
      })
   	
   }

   deleteNotes(id : string){
   	 this.notesService.deleteNotes(id)
   	 	.subscribe( data => {
   	 		data;
   	 		if("Success" === data.status){
   	 			this.messageToDisplayInModal = data.message;
   	 		}
   	 	},
      error => {
        error;
        this.showError(error._body);
      })
   }

   showError(error : string){
        this.noErrors = false;
        this.disableClicks = true;
        this.errorMsg = error;
       /* setTimeout(()=>{ 
            this.noErrors = true;
       },3000);*/
   }

   hideError(){
      this.noErrors = true;
      this.disableClicks = false;
   }
}