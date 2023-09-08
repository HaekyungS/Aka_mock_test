export const scoreMent = (score: number) => {
  if (score === 0) {
    return `"넌 그냥 나가라"`;
  } else if (score > 0 && score < 4) {
    return `"똑바로 안해?"`;
  } else if (score >= 4 && score < 7) {
    return `"이것밖에 안돼?"`;
  } else if (score >= 7 && score < 11) {
    return `"좀만 더 분발하자. 여엉차~!"`;
  } else if (score === 11) {
    return `"너 없으면 나 망해"`;
  }
};
