import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 12, name: 'Narco', date: '2020-07-07', title: '테스트입니다. 테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 13, name: 'Bombasto', date: '2020-07-07', title: '공지사항입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 14, name: 'Celeritas', date: '2020-07-07', title: '테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 15, name: 'Magneta', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 16, name: 'RubberMan', date: '2020-07-07', title: '테스트 테스트 테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 17, name: 'Dynama', date: '2020-07-07', title: '테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 18, name: 'Dr IQ', date: '2020-07-07', title: '테스트 테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 19, name: 'Magma', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 20, name: 'Tornado', date: '2020-07-07', title: '공지사항입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 21, name: 'Dr Nice', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 22, name: 'Narco', date: '2020-07-07', title: '테스트입니다. 테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 23, name: 'Bombasto', date: '2020-07-07', title: '공지사항입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 24, name: 'Celeritas', date: '2020-07-07', title: '테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 25, name: 'Magneta', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 26, name: 'RubberMan', date: '2020-07-07', title: '테스트 테스트 테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 27, name: 'Dynama', date: '2020-07-07', title: '테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 28, name: 'Dr IQ', date: '2020-07-07', title: '테스트 테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 29, name: 'Magma', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 30, name: 'Tornado', date: '2020-07-07', title: '공지사항입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 31, name: 'Dr Nice', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 32, name: 'Narco', date: '2020-07-07', title: '테스트입니다. 테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 33, name: 'Bombasto', date: '2020-07-07', title: '공지사항입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 34, name: 'Celeritas', date: '2020-07-07', title: '테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 35, name: 'Magneta', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 36, name: 'RubberMan', date: '2020-07-07', title: '테스트 테스트 테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 37, name: 'Dynama', date: '2020-07-07', title: '테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 38, name: 'Dr IQ', date: '2020-07-07', title: '테스트 테스트', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 39, name: 'Magma', date: '2020-07-07', title: '테스트입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' },
      { id: 40, name: 'Tornado', date: '2020-07-07', title: '공지사항입니다.', contents: '공지사항 내용입니다', file: 'file.jpg' }
    ];
    return {heroes};
  }

  // 히어로 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드 합니다.
  // 히어로 목록이 비어있다면 이 메소드는 초기값(11)을 반환합니다.
  // 히어로 목록이 비어있지 않으면 히어로 id의 최대값에 1을 더해서 반환합니다.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
