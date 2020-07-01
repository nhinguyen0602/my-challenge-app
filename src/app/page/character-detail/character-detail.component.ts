import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/model/character';
import { CharacterService } from 'src/app/service/character.service';
import { House } from 'src/app/shared/model/house';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/service/house.service';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public character: Character;
  private url: string;
  public houses: House[] = [];

  constructor(
    private characterService: CharacterService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.url = this.characterService.characterUrl + this.router.url.split(`/`).slice(-1).pop();
    this.characterService.getCharacter(this.url).subscribe(character => this.character = character);
  }
}
