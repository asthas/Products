import {Component, Input} from 'angular2/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'product-list',
    templateUrl:'app/product.list.html'
})

export class ProductListComponent {
    constructor (){}

    @Input()
    products: Product[]
}

