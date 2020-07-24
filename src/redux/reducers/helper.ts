enum DataKey {
  pv_public_vis = 'pv_public_vis',
  sa_libell_secteur_d_activit = 'sa_libell_secteur_d_activit',
  cp_adresse_code_postal = 'cp_adresse_code_postal',
}

export const parseGroups = (groups: any) => {
  const groupSelected: any = {};
  for (const group of groups) {
    if (
      group.name === DataKey.cp_adresse_code_postal ||
      group.name === DataKey.pv_public_vis ||
      group.name === DataKey.sa_libell_secteur_d_activit
    ) {
      groupSelected[group.name] = group.facets;
    }
  }
  return groupSelected;
};

export const percentage = (obj: { name1: number; name2: number }) => {
  const percentageVal1 = (obj.name1 / (obj.name2 + obj.name1)) * 100;
  const percentageVal2 = 100 - percentageVal1;

  return {
    n1: percentageVal1,
    n2: percentageVal2,
  };
};

export const parseGenderGroup = (groupsSelected: any) => {
  const obj: { women: number; men: number } = { women: 0, men: 0 };
  for (const group of groupsSelected) {
    if (group.path === 'Femmes') {
      obj.women = group.count;
    }
    if (group.path === 'Hommes') {
      obj.men = group.count;
    }
  }
  return genderDisparityProcessing(obj.women, obj.men);
};

export const parseGeographicalGroup = (groupsSelected: any) => {
  const obj: { paris: number; others: number } = { paris: 0, others: 0 };
  for (const city of groupsSelected) {
    const regex = RegExp('75', 'g');
    if (regex.test(city.path)) {
      obj.paris = obj.paris + 1;
    } else {
      obj.others = obj.others + 1;
    }
  }
  return geographicalDisparityProcessing(obj.paris, obj.others);
};

export const parseSectorOfActivityGroup = (groupsSelected: any) => {
  const obj: { ecology: number; other: number } = { ecology: 0, other: 0 };
  for (const sector of groupsSelected) {
    if (sector.path === 'Environnement & cologie') {
      obj.ecology = obj.ecology + 1;
    } else {
      obj.other = obj.other + 1;
    }
  }
  return sectorOfActivityProcessing(obj.ecology, obj.other);
};

export const genderDisparityProcessing = (
  numberOfWomen: number,
  numberOfMen: number,
) => {
  const { n1, n2 } = percentage({
    name1: numberOfWomen,
    name2: numberOfMen,
  });

  return {
    percentageOfWomen: parseInt(n1.toFixed(0), 10),
    percentageOfMen: parseInt(n2.toFixed(0), 10),
  };
};

export const geographicalDisparityProcessing = (
  paris: number,
  otherCity: number,
) => {
  const { n1, n2 } = percentage({
    name1: paris,
    name2: otherCity,
  });

  return {
    percentageParis: parseInt(n1.toFixed(0), 10),
    percentageOtherCity: parseInt(n2.toFixed(0), 10),
  };
};

export const sectorOfActivityProcessing = (
  ecologicAssociation: number,
  otherAssociation: number,
) => {
  const { n1, n2 } = percentage({
    name1: ecologicAssociation,
    name2: otherAssociation,
  });

  return {
    percentageEcologicAssociation: parseInt(n1.toFixed(0), 10),
    percentageOtherAssociation: parseInt(n2.toFixed(0), 10),
  };
};
