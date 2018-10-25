import { Injectable } from "@angular/core";
import { Product } from "./product";
import { User } from "./user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  user: User;
  constructor(private http: HttpClient) {}

  token: string = localStorage.getItem("token");

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.token
    })
  };

  private productUrl =
    "https://efa-gardenapp-backend.herokuapp.com/api/product";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.error(error);

      //Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productUrl)
      .pipe(catchError(this.handleError("getProducts", [])));
  }

  deleteProduct(id: number): Observable<Product[]> {
    console.log(this.token);
    return this.http
      .delete<Product[]>(`${this.productUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError("deleteProduct", [])));
  }
}
