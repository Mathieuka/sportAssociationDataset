import { ActionType } from './types';
import axios from 'axios';

const url =
  'https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_associations_parisiennes&q=&facet=pr_nom_statutaire&facet=cp_adresse_code_postal&facet=sa_secteur_d_activit_1&facet=sa_secteur_d_activit_2&facet=sa_secteur_d_activit_3&facet=sa_libell_secteur_d_activit&facet=pv_public_vis&facet=sg_secteur_gographique';

export const getData = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(url);
      dispatch({
        type: ActionType.GET_DATA,
        payload: {
          response,
        },
      });
    } catch (error) {
      throw new Error(`Error:: ${error}`);
    }
  };
};
