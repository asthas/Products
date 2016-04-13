import {Component, OnInit} from 'angular2/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'product-list',
    templateUrl:'app/product.list.html'
})

export class ProductListComponent implements OnInit{
    constructor (private _productService: ProductService){}
    errorMessage: String;
    products: Product[];
    ngOnInit(){
        this.getProducts()
    }

    getProducts(){
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
            );
    }
}

