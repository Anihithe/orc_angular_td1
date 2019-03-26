import { Component } from '@angular/core';

export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title: string, content: string, loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = new Date();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Mon Blog';

  posts: Post[] = [
    new Post(
      'Mon premier post',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni ratione ex eius at aliquam, quidem est iste. Sae',
      1
    ),
    new Post(
      'Mon second post',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni ratione ex eius at aliquam, quidem est iste. Sae',
      -1
    ),
    new Post(
      'Un autre post',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni ratione ex eius at aliquam, quidem est iste. Sae',
      0
    )
  ];

  constructor() {
  }
}
