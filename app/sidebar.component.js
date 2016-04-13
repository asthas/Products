System.register(['angular2/core', './product.service'], function(exports_1, context_1) {
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
    var core_1, product_service_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_productService) {
                    this._productService = _productService;
                }
                SidebarComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                SidebarComponent.prototype.getProducts = function () {
                    var _this = this;
                    this._productService.getProducts()
                        .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar-list',
                        templateUrl: 'app/sidebar.list.html'
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map