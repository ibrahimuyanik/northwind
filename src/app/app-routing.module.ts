import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full",component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent}, // :categoryId --> categoryId değişken demek neye basılırsa onun id'si gelecek demek products/category sabit link yani değişmeyecek :categoryId değişken demek 
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
patcMatch:"full" --> bunun anlamı url olarak sadece localhost:4200 olmalı demek 

mesela localhost:4200/products derse çalışmayacak çünkü pathMatch ile path'i yani url yolunu sınırladık

sadece ana sayfaya istek yapılırsa product component'i göster dedik.
*/