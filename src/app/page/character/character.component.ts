import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';
import { Character } from 'src/app/shared/model/character';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnChanges {
  @Input() listCharaterUrls: string[] ;
  characters: Character[]
  searchText;
  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngOnChanges():void{
    this.getCharacters();
  }

  getCharacters(){
    if(this.listCharaterUrls !== null){
      let listQuery = this.listCharaterUrls.map(url => this.characterService.getCharacter(url));
      forkJoin(listQuery).subscribe(results => this.characters = results);
    }
    else{
    this.characterService.getCharacters().subscribe(characters => this.characters = characters)
    }
  }

}
