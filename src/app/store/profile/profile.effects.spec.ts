
// import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
// import { profileEffects } from './profile.effects';

// import {
//   TestBed,  
//   inject,
//   async
// } from '@angular/core/testing';




// describe('profileEffects', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     declarations: [
//       profileEffects
//     ],
//     imports: [
//       EffectsTestingModule
//     ]
//   }));

//   let runner: EffectsRunner;

// 	beforeEach(inject([
// 	  EffectsRunner,
// 	  (_runner) => {
// 	    runner = _runner;
// 	  }
// 	]));

// 	it('should return a [profile] GET_PROFILE_SUCCESS action after [profile] GET_PROFILE', () => {
// 	  runner.queue({ type: '[profile] GET_PROFILE' });

// 	  profileEffects.getProfile$.subscribe(result => {
// 	    expect(result).toEqual({ type: '[profile] GET_PROFILE_SUCCESS' });
// 	  });
// 	});

// });


