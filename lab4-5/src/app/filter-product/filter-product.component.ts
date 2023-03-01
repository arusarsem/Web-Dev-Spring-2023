import {Component, Input, OnInit} from '@angular/core';
import {products, Product} from "../products";
import {ActivatedRoute} from "@angular/router";


// @ts-ignore
@Component({
    selector: 'app-filter-product',
    templateUrl: './filter-product.component.html',
    styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit{
    private Products = products;
    id?: number;

    getCategory(): Product[] {
        let prod: Product[] = []
        for (let i of products){
            if(i.categoryId == this.id){
                prod.push(i)
            }
        }
        return prod;
    }

    constructor(private route: ActivatedRoute) {
    }


    ngOnInit(): void {

        this.route.paramMap.subscribe((params) => {
             this.id = Number(params.get('categoryId'));
            console.log(this.id);
            });
        }





}
