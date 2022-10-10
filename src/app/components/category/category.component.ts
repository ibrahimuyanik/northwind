import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[] = []
  currentCategory: Category  //tsconfig dosyasına "strictPropertyInitialization": false ekledik yoksa hata veriyor
  
  //currentCategory o anda işlemi yapılacak olan kategoriyi atadığımız değişken.

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
    })
    
  }

  setCurrentCategory(category:Category){ // tıkladığımız kategorinin bilgilerini veren metod
    this.currentCategory = category
  }

  getCurrentCategoryClass(category:Category){ // seçilen kategoriyi mavi yapan metod

    if (category == this.currentCategory) { //şuan ki categoy ile seçilen kategori eşit ise mavi yap dedik
      return "list-group-item active"
    }else{
      return "list-group-item" // eşit değilse yapma
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
    
  }

}
