import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/model/character';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public character: Character;
  private url: string;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.url = localStorage.getItem('characterCurrent');
    this.characterService.getCharacter(this.url).subscribe(charater => this.character = charater);
  }

}
