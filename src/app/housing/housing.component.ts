import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.scss']
})
export class HousingComponent {

  constructor(private router: Router) { }

  posts: Post[] = [
    new Post("July 10, 2017", "2 BR House", 1700, "SE Portland", "New unit", 1),
    new Post("July 9, 2017", "Studio", 1000, "NW Portland", "This a studio unit in a historic building in NW Portland.", 2),
    new Post("July 9, 2017", "2 Bedroom Apartment", 2400, "Pearl District", "Top-floor unit in new Pearl District complex.", 3),
    new Post("July 9, 2017", "5 BR House", 3000, "NE Portland", "Large 5-bedroom tudor-style house in NE Portland near Alberta Arts District", 4),
    new Post("July 8, 2017", "Studio", 700, "SW Portland", "Studio apartment in older building near OHSU", 5)
  ];

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };
}
