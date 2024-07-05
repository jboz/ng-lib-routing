import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type ProcessState = {
  partnerIdentifier: string;
};

const initialState: ProcessState = {
  partnerIdentifier: ''
};

export const ProcessStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, router = inject(Router)) => ({
    startProcess(partnerIdentifier: string) {
      patchState(store, state => ({ ...state, partnerIdentifier }));
      router.navigate(['/', partnerIdentifier, 'risk-analyze']);
    }
  }))
);
