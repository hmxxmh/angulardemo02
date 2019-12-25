import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data) => {
        console.log(data);
    })
  }

}
