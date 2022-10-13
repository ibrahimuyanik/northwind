import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 

  products:Product[] = []
  filterText = "";
  //dataLoaded = false;
  
 


  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { } // burada httpClient nesnesinin instance'ını oluşturduk. c# da autofac ile yapmıştık burada böyle yapılıyor.
                    
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

addToCart(product:Product){
  this.toastrService.success("Sepete eklendi", product.productName)
  this.cartService.addToCart(product)
}

}
