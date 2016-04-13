import {Injectable} from 'angular2/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';

@Injectable()

export class ProductService {
    constructor(private http: Http) { }

    store: Product[];

    getProducts() {
        return this.http.get('/adurcup')
            .map(res => <Product[]>res.json().products)
            .map(products => {
                return products.map(product => {
                    //reassign image_src
                    product.image_src = product.image_src
                        .map(img => `http://www.adurcup.com/images/product/${img}`)

                    return product
                })
            })
            .do(products => {
                //store data in the service itself
                this.store = products
            })
            .catch(err => Observable.throw(err));
    }

    searchProducts(term: string) {
        return Observable.of(
            this.store
                .filter(product => product.title.toLowerCase().indexOf(term.toLowerCase()) !== -1)
        )
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
