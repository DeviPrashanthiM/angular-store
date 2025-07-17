import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product!:Product;
  productForm!: FormGroup;

  private activeRoute = inject(ActivatedRoute);
  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((param) => {
      if(param.get('id') !== null)

      this.userService.getProductDetails(param.get('id') || '1').subscribe((res) => {
        this.productForm.setValue(res);
         console.log(res);
      })
    });

     this.productForm = this.fb.group({
      id: [],
      title: [],
      price: [],
      description: [],
      category: [],
      image: [],
      rating: this.fb.group({
        rate: [],
        count: []
      })
    });

  }

  onSubmit(): void {
    console.log(this.productForm.value);
  }

}
