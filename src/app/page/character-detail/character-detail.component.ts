import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/model/character';
import { CharacterService } from 'src/app/service/character.service';
import { House } from 'src/app/shared/model/house';
import { HouseService } from 'src/app/service/house.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public character: Character;
  private url: string;
  public houses: House[] = [];
  public house: House;

  constructor(
    private characterService: CharacterService,
    private houseService: HouseService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.url = localStorage.getItem('characterCurrent');
    this.characterService.getCharacter(this.url).subscribe(charater => this.character = charater );
  }

}
