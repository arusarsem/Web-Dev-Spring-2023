import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    // products: Product[] = []
    products = products;
    constructor(
        private route: ActivatedRoute,
    ){}

    like(id: number){
        products[id].like++;
    }



    share(link: string) {
        window.alert('The product has been shared!');
        window.open('https://t.me/share/url?url='+link);
    }
    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const categoryIdFromRoute = Number(routeParams.get('categoryId'));
        this.products = products.filter(product => product.categoryId === categoryIdFromRoute);
    }
    onNotify(){
        window.alert("You will be notified when the product goes on sale");
    }

    deleteProd(id: number){
        console.log(id);
        this.products.forEach((element,index)=>{
            if(element.id==id+1) this.products.splice(index, 1);
        });
    }

}
