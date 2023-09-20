import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  id!: string

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']})
  }
}
