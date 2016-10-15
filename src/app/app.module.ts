import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { profileReducer } from './store/profile/profile.reducer';

import { Store, StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';

import { profileActions } from './store/profile/profile.actions';
import { profileEffects } from './store/profile/profile.effects';

import { ProfileService } from  './store/profile/profile.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ profile: profileReducer }),
    EffectsModule.run(profileEffects)
  ],
  providers: [profileActions, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
