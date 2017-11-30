import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { DeleteNotesComponent } from './delete-notes/delete-notes.component';
import { NotesService } from './notes.service';
import { DatePipe } from '@angular/common';
import { dateFormatPipe } from './common/pipes';


@NgModule({
  declarations: [
    ViewNotesComponent,
    UpdateNotesComponent,
    AddNotesComponent,
    DeleteNotesComponent,
    dateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [ViewNotesComponent]
})
export class AppModule { }
