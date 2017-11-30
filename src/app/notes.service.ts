import {Injectable} from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Notes} from './notes';

@Injectable()
export class NotesService {
  constructor(private http : Http){
  }

  getNotes(username : string): Observable<any> {
        return this.http.get("/api/fetchNotes?userName="+username)
         .map(this.extractData)
         .catch(this.handleError);
    }

  getWelcomeMsg(): Observable<any> {
        return this.http.get("/api")
         .map(this.extractData)
         .catch(this.handleError);
    }

   addNotes(object : any): Observable<any> {
        return this.http.post("/api/createNewNotes",object)
         .map(this.extractData)
         .catch(this.handleError);
    }

   deleteNotes(id : string): Observable<any> {
        return this.http.delete("/api/deleteNotes?id="+id)
         .map(this.extractData)
         .catch(this.handleError);
    }

 private extractData(res: Response) {
  let body = res.json();
  console.log(body);
  return body;
    }

  private handleError(error: Response) {
  return Observable.throw(error);
    }

}
