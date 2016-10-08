import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { profileReducer } from './store/profile/profile.reducer';

import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileEffects } from './store/profile/profile.effects';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
