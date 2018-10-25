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
  canDelete: boolean = false;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
    this.isAdmin();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }
  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }

  isAdmin(): void {
    localStorage.getItem("role") === "admin"
      ? (this.canDelete = true)
      : (this.canDelete = false);
  }
}
