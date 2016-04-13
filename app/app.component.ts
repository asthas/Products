import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {JSONP_PROVIDERS} from 'angular2/http';
import {Product} from './product';
import {ProductService} from './product.service';
import {ProductListComponent} from './product.list.component';
import {SidebarComponent} from './sidebar.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ProductListComponent, SidebarComponent],
    providers: [
        JSONP_PROVIDERS,
        HTTP_PROVIDERS,
        ProductService,
    ]
})

export class AppComponent implements OnInit {
    constructor(private _productService: ProductService) { }
    products: Product[];
    errorMessage: string;

    ngOnInit() {
        this.getProducts()
    }

    getProducts() {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
            );
    }

    search() {
        const self = this
        return (term: string) => {
            self._productService.searchProducts(term)
                .subscribe(products => self.products = products)
        }
    }
}
