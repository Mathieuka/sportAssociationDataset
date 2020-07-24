import { ActionType } from './types';

export const getData = () => {
  return (dispatch: any) => {
    // request here
    const result = 'REQUEST OK';
    return () =>
      dispatch({
        type: ActionType.GET_DATA,
        payload: {
          result,
        },
      });
  };
};
