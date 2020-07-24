import { ActionType } from './types';
import axios from 'axios';

enum DataKey {
  pv_public_vis = 'pv_public_vis',
  sa_libell_secteur_d_activit = 'sa_libell_secteur_d_activit',
  cp_adresse_code_postal = 'cp_adresse_code_postal',
}

export const getData = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        'https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_associations_parisiennes&q=&facet=pr_nom_statutaire&facet=cp_adresse_code_postal&facet=sa_secteur_d_activit_1&facet=sa_secteur_d_activit_2&facet=sa_secteur_d_activit_3&facet=sa_libell_secteur_d_activit&facet=pv_public_vis&facet=sg_secteur_gographique',
      );
      const obj: any = {};
      const groups = response.data.facet_groups;
      for (const group of groups) {
        if (
          group.name === DataKey.cp_adresse_code_postal ||
          group.name === DataKey.pv_public_vis ||
          group.name === DataKey.sa_libell_secteur_d_activit
        ) {
          obj[group.name] = group.facets;
        }
      }

      dispatch({
        type: ActionType.GET_DATA,
        payload: {
          response: { ...obj },
        },
      });
    } catch (error) {
      throw new Error(`Error:: ${error}`);
    }
  };
};
