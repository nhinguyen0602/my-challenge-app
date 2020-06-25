import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/model/character';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter(){
    var url = localStorage.getItem('characterCurrent')
    this.characterService.getCharacter(url).subscribe(charater => this.character = charater)
  }

}
