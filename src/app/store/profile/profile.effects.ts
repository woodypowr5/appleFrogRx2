import { Injectable} from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import "rxjs/Rx";

import { profileActions } from './profile.actions';
import { ProfileService } from './profile.service';
import { profileReducer } from './profile.reducer';

@Injectable()
export class profileEffects {
	constructor (
		private actions$: Actions,
        private profileActions: profileActions,
        private svc: ProfileService
	){}

	@Effect() getProfile$ = this.actions$
		.ofType('[profile] GET_PROFILE')
		.map<number>(action => action.payload)
		.switchMap(id => this.svc.getProfile(id))
		.map(res => ({ type: '[profile] GET_PROFILE_SUCCESS', payload: res }));
}

