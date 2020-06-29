import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';
import { Character } from 'src/app/shared/model/character';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnChanges {
  @Input() listCharaterUrls: string[] ;
  public characters: Character[];
  public searchText;
  public isLoading = false;
  public config: any;
  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 1000
    };
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngOnChanges(): void{
    this.getCharacters();
  }

  getCharacters(){
    this.isLoading = true;
    if (this.listCharaterUrls && this.listCharaterUrls.length){
      const listQuery = this.listCharaterUrls.map(url => this.characterService.getCharacter(url));
      forkJoin(listQuery).subscribe(results => {
           this.characters = results;
           this.isLoading = false;
          }
        );
    }
  }

  selectCharacter(url){
    localStorage.setItem('characterCurrent', url);
    this.router.navigate(['character-detail', url.split('/').slice(-1).pop()]);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
