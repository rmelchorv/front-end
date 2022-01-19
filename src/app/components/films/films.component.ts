import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Config } from 'src/global-config';
import { Film  } from 'src/app/models/films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  //#region Attributes

  public colorName : string
  public config = Config;
  public films : Array<Film>;
  public genres : Array<string>;
  public genreName : string;
  public showFilms : boolean;

  //#endregion Attributes

  //#region Constructor

  constructor() {
    this.colorName = this.config.color;
    this.films = [
      new Film("Dora and the Lost City of Gold","Adventure",2019,"James Bobin",1,"EE.UU."),
      new Film("Jeepers Creepers","Terror",2001,"Victor Salva",1,"EE.UU."),
      new Film("Revolver","Crime",2005,"Guy Ritchie",1,"U.K."),
      new Film("Child's Play","Terror",1988,"Tom Holland",0,"EE.UU.")
    ];
    this.genres = [];
    this.genreName = "New genre";
    this.showFilms = true;
  }

  //#endregion Constructor

  //#region Hooks

  ngOnChanges(changes : SimpleChanges) {
    console.log("OnChanges executed!");
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getGenres()
    },1000);
    console.log("OnInit executed!");
  }

  ngDoCheck() {
    /*
    console.log("DoCheck executed!");
    console.log(this.colorName);
    console.log(this.genreName);
    */
  }

  ngOnDestroy() {
    console.log("OnDestroy executed!");
  }

  //#endregion Hooks

  //#region Events

  onAdd() {
    this.genres.push(this.genreName);
  }

  onBlur() {
    console.log("OnBlur executed!");
  }

  onChange() {
    this.config.color = this.colorName;
  }

  onDel(index : number) {
    this.genres.splice(index, 1);
  }

  onFocus() {
    console.log("OnFocus executed!");
  }

  //#endregion Events

  //#region Methods

  getGenres() {
    this.films.forEach((film) => {
      if(this.genres.indexOf(film.genre)<0)
        this.genres.push(film.genre);
    });
  }

  //#endregion Methods
}
