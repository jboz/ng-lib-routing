import { signalState } from '@ngrx/signals';

interface Risk {
  partnerIdentifier: string;
  statut: 'ANALYZING' | 'ACCEPTED' | 'REJECTED';
}

type RiskAnalyzeState = {
  analyzes: { [key: string]: Risk };
  current: string;
};

export const riskAnalyzeState = signalState<RiskAnalyzeState>({ analyzes: {}, current: '' });

export const addRiskAnalyse = (partnerIdentifier: string) => (state: RiskAnalyzeState) =>
  state.analyzes[partnerIdentifier]
    ? state
    : {
        ...state,
        analyzes: { ...state.analyzes, [partnerIdentifier]: { partnerIdentifier, statut: 'ANALYZING' } },
        current: partnerIdentifier
      };

export const currentAnalyse = () => riskAnalyzeState.analyzes()[riskAnalyzeState.current()];
