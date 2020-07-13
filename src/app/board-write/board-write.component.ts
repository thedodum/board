import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder} from '@angular/forms';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-board-write',
  templateUrl: './board-write.component.html',
  styleUrls: ['./board-write.component.css']
})
export class BoardWriteComponent implements OnInit {
  writeForm;
  hero: Hero;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private heroService: HeroService
    ) {
    this.writeForm = this.formBuilder.group({
      name: '',
      title: '',
      contents: '',
      file: '',
      date: new Date().toISOString().substr(0, 10).replace('T', ' '),
    });
  }

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

  /*add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }*/

  onSubmit(writeData: any){
    this.writeForm.reset();
    console.warn('submitted', writeData);

    this.heroService.addHero(writeData)
      .subscribe(hero => {
        // console.log('hero: ', hero);
        this.hero = hero;
      });
  }

}
