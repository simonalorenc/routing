import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { MainComponent } from '../main/main.component';
import { MoreInfoComponent } from '../more-info/more-info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: ProductsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
