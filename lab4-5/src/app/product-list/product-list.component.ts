import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products = products;

    share(link: string) {
        window.alert('The product has been shared!');
        window.open('https://t.me/share/url?url='+link);
    }
    onNotify(){
        window.alert("You will be notified when the product goes on sale");
    }



}
