import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }
<<<<<<< HEAD
  deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    console.log(product);
=======

  isAdmin(): boolean {
    let result: boolean
    localStorage.getItem('role') === "admin" 
    ? result= true : result= false
    return result
>>>>>>> 1b6d6b03aa67ace2dda3156062fad18271de9667
  }
}
