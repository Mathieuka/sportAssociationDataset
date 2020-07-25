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
      // Get groupe select for survey
      const groupSelected = parseGroups(
        action.payload.response.data.facet_groups,
      );

      // Get gender percentage between man and woman
      const genderPercentage = parseGenderGroup(groupSelected.pv_public_vis);

      // Get city percentage between Paris and other city
      const geographicalGroupPercentage = parseGeographicalGroup(
        groupSelected.cp_adresse_code_postal,
      );

      // Get sector percentage between ecologic association and other
      const sectorPercentage = parseSectorOfActivityGroup(
        groupSelected.sa_libell_secteur_d_activit,
      );

      return {
        genderPercentage,
        geographicalGroupPercentage,
        sectorPercentage,
      };
    default:
      return state;
  }
};
