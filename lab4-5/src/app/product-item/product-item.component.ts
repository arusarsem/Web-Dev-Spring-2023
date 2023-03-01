import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
    @Input() product !: Product


    constructor(private route: ActivatedRoute,) {

    }

    ngOnInit(): void {

    }

    share(link: string) {
        window.alert('The product has been shared!');
        window.open('https://t.me/share/url?url='+link);
    }

    onNotify() {
        window.alert("You will be notified when the product goes on sale");
    }

    like(id: number) {
        products[this.product.id-1].like++;
    }
}
