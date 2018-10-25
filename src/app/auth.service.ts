import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  private authUrl =
    "https://efa-gardenapp-backend.herokuapp.com/api/auth/login";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.error(error);

      //Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  login(user: User): Observable<User> {
    return this.http
      .post<User>(this.authUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError<User>("login")));
  }
}
