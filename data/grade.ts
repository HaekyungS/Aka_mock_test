export const grade = (score: number) => {
  if (score === 11) {
    return 100;
  } else {
    const userGrade = Math.floor(score * (100 / 11));
    return userGrade;
  }
};
