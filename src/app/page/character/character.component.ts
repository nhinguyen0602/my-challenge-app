import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';
import { Character } from 'src/app/shared/model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: Character[]

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.characterService.getCharacters().subscribe(characters => this.characters = characters)
  }

}
