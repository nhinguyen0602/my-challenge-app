import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/model/house';
import { HouseService } from 'src/app/service/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public houses: House[];
  public searchText;
  public isLoading = false;

  constructor(
    private houseService: HouseService
  ) { }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(){
    this.isLoading = true;
    this.houseService.getHouses().subscribe(houses => {
      this.houses = houses;
      this.isLoading = false;
    });
  }
}
