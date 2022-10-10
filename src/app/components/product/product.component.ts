import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 

  products:Product[] = []
  //dataLoaded = false;
  
 


  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute) { } // burada httpClient nesnesinin instance'ını oluşturduk. c# da autofac ile yapmıştık burada böyle yapılıyor.
                    
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { // url'de parametresi categoryId olan varsa demek
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"]) // id'ye göre listele dedik
      }else{
        this.getProducts(); // url'de categoryId yoksa bütün ürünleri listele dedik
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      //this.dataLoaded = true
    })
}

getProductsByCategory(categoryId:number){
  this.productService.getProductsByCategory(categoryId).subscribe(response => {
    this.products = response.data
    //this.dataLoaded = true
  })
}


}
