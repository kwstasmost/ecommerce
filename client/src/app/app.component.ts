import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //bugs: count and pagination doesnt work- cant change page manually
  //https://valor-software.com/ngx-bootstrap/#/components/pagination?tab=overview
  
  //its not good to inject http in a component
  //use services instead
  constructor() {}

  ngOnInit(): void {
    //why response Ipagination doesnt work??
    // this.http.get('https://localhost:5001/api/products')
    // .subscribe((response: any) => {
    //   console.log(response);
    //   this.products = response.data;
    // }, error => {
    //   console.log(error.Message);
    // });
  }

  title = 'Eshop';
}
