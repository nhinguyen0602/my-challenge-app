import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { House } from 'src/app/shared/model/house';
import { HouseService } from 'src/app/service/house.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit, OnChanges {

  @Input() listHouseUrls: string[] = [];
  public houses: House[];
  public searchText;
  public isLoading = false;

  constructor(
    private houseService: HouseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  //  this.getHouses();
  }

  ngOnChanges(){
    this.getHouses();
  }

  getHouses(){
    this.isLoading = true;
    if (this.listHouseUrls && this.listHouseUrls.length){
      const listQuery = this.listHouseUrls.map(url => this.houseService.getHouse(url));
      forkJoin(listQuery).subscribe(results => this.houses = results);
    }
    else{
    this.houseService.getHouses().subscribe(houses => {
      this.houses = houses;
    });
  }
    this.isLoading = false;
  }

  selectHouse(url: string){
    this.router.navigate(['house-detail', url.split(`/`).slice(-1).pop()]);
  }
}
