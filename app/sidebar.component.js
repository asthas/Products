System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                    this.productList = ["Container (109)", "Napkin (2)", "Foils (0)", "Cup (11)", "Cutlery (36)", "Straw (13)", "Bag (0)", "Plates (19)", "Bowl (11)", "Meal Tray (8)", "Glass (31)", "Box (30)", "Toiletries (2)", "Others (15)"];
                    this.material = ["Plastic (220)", "Paper (38)", "Aluminium (4)", "Wooden (2)", "Bio- Degradable(0)", "Thermocol (2)", "Earthen (17)", "Cloth (4)"];
                    this.price = ["Rs. 0 - Rs. 10", "Rs.10 - Rs. 50", "Rs.100 - Rs. 250", "Rs.250 - Rs. 500", "Above Rs. 500"];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SidebarComponent.prototype, "products", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], SidebarComponent.prototype, "search", void 0);
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar-list',
                        templateUrl: 'app/sidebar.list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map