import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoviesModule } from './movies/movies.module';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './reducers';
import { AppEffects } from './app.effects';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharactersListTableComponent } from './characters/characters-list-table/characters-list-table.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersListTableComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    
    MatCardModule,
    
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    MoviesModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
 
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
