import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, from, map, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // private route = inject(ActivatedRoute);
  // public products$!:Observable<Product[]>;

  // ngOnInit() {
  //   this.products$ = this.route.data.pipe(
  //     map(data => data['products'])
  //   );
  // }
}
