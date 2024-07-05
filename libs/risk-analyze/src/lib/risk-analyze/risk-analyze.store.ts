import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

export interface Risk {
  partnerIdentifier: string;
  status: 'ONGOING' | 'ACCEPTED' | 'REJECTED';
}

type RiskAnalyzeState = {
  analyses: { [key: string]: Risk };
  active: string;
};

const initialState: RiskAnalyzeState = { analyses: {}, active: '' };

export const RiskAnalyzeStore = signalStore(
  withState(initialState),
  withComputed(({ analyses, active }) => ({
    activeAnalysis: computed(() => analyses()[active()]),
    currentAnalyses: computed(() => Object.values(analyses()).filter(a => !!a.partnerIdentifier))
  })),
  withMethods(store => ({
    addRiskAnalyze(partnerIdentifier: string) {
      patchState(store, state =>
        state.analyses[partnerIdentifier]
          ? state
          : ({
              ...state,
              analyses: { ...state.analyses, [partnerIdentifier]: { partnerIdentifier, status: 'ONGOING' } },
              active: partnerIdentifier
            } as RiskAnalyzeState)
      );
    }
  }))
);
