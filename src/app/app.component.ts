import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

public userData: any[];
public userList = ['Select UserName', 'Egon Spengler', 'Glinda Southgood'];
data;
selectedData;
    constructor(public dataService: DataService) {

    }
    selected = this.userList[0];
  ngOnInit() {
    this.dataService.myMockData().subscribe(data => {
      console.log(data);
      this.data = data;

    });
    this.onSelect(this.userList[0]);
    // this.getData();
  }
getData() {

  return [...this.data.members];
}
  onSelect(val) {
    console.log(val);
    if (val === '"Select UserName"') {

    } else if (val !== '"Select UserName"') {
    this.selectedData = this.getData().filter(x => x.real_name === val);
    console.log(this.selectedData);
  }
  }
}
