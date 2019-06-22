import { Component, OnInit } from '@angular/core';
declare function init();
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init();
  }

}
