import { Component, OnInit } from '@angular/core';
import Product from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }

  deleteProduct(id) {
    
    this.ps.deleteProduct(id).subscribe(res => {
      const index = this.products.findIndex(p => p._id === id);
      this.products.splice(index, 1);
    });

    // this.products = this.products.filter(p => p._id !== id); 

  }

}
