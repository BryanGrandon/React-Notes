const getFoodIf = (isVegetarian) => {
  if (isVegetarian) return "tofu";
  else return "fish";
};

const getFoodTernary = (isVegetarian) => {
  return isVegetarian ? "tofu" : "fish";
};
