import {Component} from 'angular2/core';
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
export class AppComponent{

}

