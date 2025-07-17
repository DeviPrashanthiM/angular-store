import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 private route = inject(ActivatedRoute);
 private router = inject(Router);
  public products$!:Observable<Product[]>;

  ngOnInit() {
    this.products$ = this.route.data.pipe(
      map(data => data['products'])
    );
  }

  showProductInfo(product: Product): void {
    this.router.navigate([product.id], {relativeTo: this.route})
  }
}
