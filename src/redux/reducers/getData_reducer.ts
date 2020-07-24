import { ActionType } from '../actions/types';

interface IGetDataInitialState {
  result: string;
}

const getDataInitialState = {
  result: '',
};

export const getDataReducer = (
  state: IGetDataInitialState = getDataInitialState,
  action: { type: any; payload: any },
) => {
  switch (action.type) {
    case ActionType.GET_DATA:
      console.log('getDataReducer triggered');
      return state;
    default:
      return state;
  }
};
