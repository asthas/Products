import {Injectable} from 'angular2/core';
import {
    Http,
    Response,

    Headers,
    RequestOptions
} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './Product';

@Injectable()

export class ProductService{
    constructor (private http: Http){}

    getProducts() {
        return this.http.get('/adurcup')
        .map(res => <Product[]>res.json().products)
         .map(products => {
             return products.map(product => {
                 //reassign image_src
                 product.image_src =
                     product.image_src
                     .map(img => `http://www.adurcup.com/images/product/${img}`)
                 return product
             })
         })
        .catch(err => Observable.throw(err));
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
