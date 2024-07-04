import { PartialStateUpdater, patchState, signalState } from '@ngrx/signals';

export interface Risk {
  partnerIdentifier: string;
  status: 'ANALYZING' | 'ACCEPTED' | 'REJECTED';
}

type RiskAnalyzeState = {
  analyzes: { [key: string]: Risk };
  current: string;
};

export const riskAnalyzeState = signalState<RiskAnalyzeState>({ analyzes: {}, current: '' });

export const addRiskAnalyze =
  (partnerIdentifier: string): PartialStateUpdater<RiskAnalyzeState> =>
  state => {
    console.log('riskAnalyzeState', state);
    return state.analyzes[partnerIdentifier]
      ? state
      : ({
          ...state,
          analyzes: { ...state.analyzes, [partnerIdentifier]: { partnerIdentifier, statut: 'ANALYZING' } },
          current: partnerIdentifier
        } as RiskAnalyzeState);
  };

export const startRiskAnalyze = (partnerIdentifier: string) => patchState(riskAnalyzeState, addRiskAnalyze(partnerIdentifier));

export const currentAnalyze = () => riskAnalyzeState.analyzes()[riskAnalyzeState.current()];
