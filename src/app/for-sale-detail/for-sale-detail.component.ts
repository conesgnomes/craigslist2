import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';


@Component({
  selector: 'app-for-sale-detail',
  templateUrl: './for-sale-detail.component.html',
  styleUrls: ['./for-sale-detail.component.scss']
})
export class ForSaleDetailComponent implements OnInit {
  postId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });
  }
}
