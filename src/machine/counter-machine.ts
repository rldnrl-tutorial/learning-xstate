import { assign, createMachine } from "xstate";

export const counterMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2UoBswDoDyAdgMRobYDaADALqKgAOqsAlgC7OoF0gAeiAjADYA7DgBMAZgAcYqfzEBWADQgAngIUSclCQE5KuiZX7CFwuWIC+llaSy48AM0cl09qrSQhGLdp258CAC0-ApS4hbKahpaOvqGxqbm8tY2IASoEHDcdtjcPmwcXF6BQWKUghHyUerBlDi6jbqCugAsMq1i-FKm1rZu2PjFDEyF-iWI7Sq1UpUKlAtGCiZmFn0guQ7O+aN+w7yTUtOIYl3aCzqUy0lrqUA */
    id: "Toggle",
    initial: "On",
    context: {
      count: 0,
    },
    states: {
      On: {
        on: {
          Toggle: {
            actions: "incrementToggle",
            target: "Off",
          },
        },
      },
      Off: {
        on: {
          Toggle: {
            actions: "incrementToggle",
            target: "On",
          },
        },
      },
    },
  },
  {
    actions: {
      incrementToggle: assign({
        count: (context) => {
          return context.count + 1;
        },
      }),
    },
  }
);
