import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
import { Http } from '@angular/http';
import "rxjs/Rx";

import { Profile } from '../../models/profile';
import { ProfileState, profileReducer } from './profile.reducer';
import { profileActions } from './profile.actions';


@Injectable()
export class ProfileService {
    
    public profile$: Observable<ProfileState>;

    constructor(
    	private http: Http
    ){}

    getProfile(id): Observable<Profile> {
        console.log(this.http.get('http://localhost:3000/profiles/1'));
        return null;
    }

    // DISPATCH ACTIONS 

    // get_by_id(id){
    //     this.store.dispatch({type: profileActions.GET_BY_ID});
    // 
}
