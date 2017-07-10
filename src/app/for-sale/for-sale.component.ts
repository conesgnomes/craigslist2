import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss']
})

export class ForSaleComponent {

  constructor(private router: Router) { }

  posts: Post[] = [
    new Post("July 10, 2017", "Vaccuum", 50, "Portland", "This is a used vaccuum.", 1),
    new Post("July 10, 2017", "Macbook", 900, "Portland", "This is a used computer in slightly used condition.", 2),
    new Post("July 9, 2017", "iPhone 6", 150, "Portland", "This is a used iPhone 6, gold, 64GB.", 3),
    new Post("July 9, 2017", "Computer Desk", 75, "Portland", "This is a used desk - lightly used and could use a new coat of laquer", 4),
    new Post("July 9, 2017", "Wok", 10, "Portland", "Fine wok from china, seasoned and ready to use", 5),
    new Post("July 8, 2017", "Floor Lamp", 20, "Vancouver", "This is a used lamp from IKEA", 6)
  ];

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };
}
