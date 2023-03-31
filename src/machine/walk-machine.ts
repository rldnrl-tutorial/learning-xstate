import { createMachine } from "xstate";

export const walkMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QHUCGAbA1gOjQSwBc8A7KAYgBkxUA3MAAgAsB7AWzAG0AGAXUVAAOzWITzNi-EAA9EARi4BmbAoBMi2SoCsAGhABPOdgAcm2ZoBsWgL5XdaLNgDyxeqnoB3DJjIBxMAXoAI1QAY0wmNk5eSSERInFJGQRZBXNsFPMAdlkjTJ19ORUVbBUAFnMuAE4FPJtbEGJmCDhJe0wY4VEEpGlEAFp5NNTVIw18gwQBzUrsLkz1a3q23FRRUg64sQkepL7NI2VzEbHdCb7s7E15hTGbOy8nFzdPLA2u7dBd-cPjrVPESzYSoqSrmXKaO4gZZtehgYjNCBveIfXqTb7DFSjP4FZKVTLYUogsG1OpAA */
  id: "Walk",
  initial: "Waiting",
  states: {
    Waiting: {
      on: {
        "Leave home": "On a walk",
      },
    },
    "On a walk": {
      on: {
        "Get back home": "Walk ended",
      },
    },
    "Walk ended": {
      type: "final",
    },
  },
});
