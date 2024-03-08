export const pshLayers = [
  {
    name: "Include PSH Feasibility",
    description:
      "The PSH feasibility considers the proximity to suitable closed-loop PSH reservoir locations.",
  },
];

export const pshDefaults = {
  "Include PSH Feasibility": true,
};

export function pshReducer(state, action) {
  switch (action.layer) {
    case "Include PSH Feasibility":
      return { ...state, "Include PSH Feasibility": action.bool };
    default:
      throw new Error();
  }
}
