System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(http) {
                    var _this = this;
                    var headers = new http_2.Headers({ 'Authorization': '50481dbaf0eb104e0e6f92caabd3ec39' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    http.get('api.adurcup.com/v4/products', options)
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); })
                        .subscribe(function (products) { return _this.products = products; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
                }
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 'http-app',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'index.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductComponent);
                return ProductComponent;
            }());
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map