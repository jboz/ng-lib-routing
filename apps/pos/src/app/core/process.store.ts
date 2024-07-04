import { PartialStateUpdater, signalState } from '@ngrx/signals';

type ProcessState = {
  partnerIdentifier: string;
  isAnalysing: boolean;
  results: string[];
};

const initialState: ProcessState = {
  partnerIdentifier: '',
  isAnalysing: false,
  results: []
};

export const processState = signalState<ProcessState>(initialState);

export const startProcess = (partnerIdentifier: string): PartialStateUpdater<ProcessState> => {
  return state => (state.partnerIdentifier === partnerIdentifier ? state : { ...state, partnerIdentifier, isAnalysing: true, results: [] });
};
