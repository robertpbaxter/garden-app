import { Injectable } from "@angular/core";
import { Product } from "./product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
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
    return this.http.get<Product[]>(this.productUrl).pipe(
      // tap(products => console.log(products)),
      catchError(this.handleError("getProducts", []))
    );
  }
}
