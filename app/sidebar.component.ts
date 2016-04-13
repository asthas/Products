import {Component, OnInit} from 'angular2/core';
import {Product} from './product';
import {ProductService} from './product.service';
@Component({
    selector: 'sidebar-list',
    templateUrl: 'app/sidebar.list.html'
})
export class SidebarComponent{
    constructor(private _productService: ProductService){}
    products: Product[];
    errorMessage: String;
    ngOnInit(){
        this.getProducts();
    }
    getProducts() {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
            );
    }
}
