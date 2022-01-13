import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


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
