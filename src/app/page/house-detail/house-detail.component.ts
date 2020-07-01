import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/model/house';
import { HouseService } from 'src/app/service/house.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  public house: House;
  private url: string;
  public isLoading = true;

  constructor(
    private houseService: HouseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHouse();
  }

  getHouse(){
    this.url = this.houseService.houseUrl + this.router.url.split(`/`).slice(-1).pop();
    this.houseService.getHouse(this.url).subscribe(house => this.house = house);
    this.isLoading = false;
  }

}
