import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {BoardListComponent} from './board-list/board-list.component';
import {BoardDetailComponent} from './board-detail/board-detail.component';
import {BoardWriteComponent} from './board-write/board-write.component';
import {BoardUpdateComponent} from './board-update/board-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  // { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'boardlist', component: BoardListComponent},
  { path: 'detail/:id', component: BoardDetailComponent},
  { path: 'boardwrite', component: BoardWriteComponent},
  { path: 'boardupdate/:id', component: BoardUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
