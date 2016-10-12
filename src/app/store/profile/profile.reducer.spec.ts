import {
  TestBed,  
  inject,
  async
} from '@angular/core/testing';


import { profileActions } from './profile.actions';
import { Profile } from '../../models/profile';
import { ProfileState, profileReducer } from './profile.reducer';

describe('The Profile Reducer', () => {
    var mockedState: ProfileState = {
      	id: 0
    };
    it('should return current state when no valid actions have been made', () => {
        const state = Object.assign({}, mockedState);
        const actual = profileReducer(state, {type: 'INVALID_ACTION'});
        const expected = state;
        expect(actual).toBe(expected);
    });

});    




