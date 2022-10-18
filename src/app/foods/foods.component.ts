import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  params: Subscription;
  searchItem: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.params = this.route.params.subscribe((param: Params) => {
      this.searchItem = param['search'];
    });
  }

}
