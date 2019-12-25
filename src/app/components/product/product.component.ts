import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  goNewsContent() {
      console.log("123");
    //   路由跳转
    this.router.navigate(['/newsDetail/','1234']);
  }

}
