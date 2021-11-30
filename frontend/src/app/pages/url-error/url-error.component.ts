import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-url-error',
  templateUrl: './url-error.component.html',
  styleUrls: ['./url-error.component.scss']
})
export class UrlErrorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  path = '';

  ngOnInit(): void {
    this.route.url.subscribe(value => {
      console.log(value);
      this.path = value[value.length-1].path;
    })
  }

}
