import {Component, Input} from 'angular2/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'sidebar-list',
    templateUrl: 'app/sidebar.list.html'
})

export class SidebarComponent{
    constructor(){}

    @Input()
    products: Product[];

    @Input()
    search: (string) => void;

    productList = ["Container (109)","Napkin (2)", "Foils (0)", "Cup (11)", "Cutlery (36)", "Straw (13)", "Bag (0)", "Plates (19)", "Bowl (11)", "Meal Tray (8)", "Glass (31)", "Box (30)", "Toiletries (2)", "Others (15)"];
    material = ["Plastic (220)", "Paper (38)", "Aluminium (4)", "Wooden (2)", "Bio- Degradable(0)", "Thermocol (2)", "Earthen (17)", "Cloth (4)"];
    price = ["Rs. 0 - Rs. 10", "Rs.10 - Rs. 50", "Rs.100 - Rs. 250", "Rs.250 - Rs. 500", "Above Rs. 500"];
}
