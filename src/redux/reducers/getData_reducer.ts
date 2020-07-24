import { ActionType } from '../actions/types';
import {
  parseGroups,
  parseGenderGroup,
  parseGeographicalGroup,
  parseSectorOfActivityGroup,
} from './helper';

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
      const groupSelected = parseGroups(
        action.payload.response.data.facet_groups,
      );
      const genderPercentage = parseGenderGroup(groupSelected.pv_public_vis);
      const GeographicalGroupPercentage = parseGeographicalGroup(
        groupSelected.cp_adresse_code_postal,
      );
      const sectorPercentage = parseSectorOfActivityGroup(
        groupSelected.sa_libell_secteur_d_activit,
      );
      // console.log('categorySelected => ', categorySelected);
      return {
        genderPercentage,
        GeographicalGroupPercentage,
        sectorPercentage,
      };
    default:
      return state;
  }
};
