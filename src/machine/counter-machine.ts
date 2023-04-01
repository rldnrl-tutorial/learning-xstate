import { assign, createMachine } from "xstate";

type CounterContext = {
  count: number;
};

type CounterEvents = {
  type: "Toggle";
};

export const counterMachine = createMachine<CounterContext, CounterEvents>(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2UoBswGIDaADALqKgAOqsAlgC5WoB2pIAHogLQDMAjJwHQAOAJwCALJwDsAVgA0IAJ6JufTgCZRq7gOkBfHXLQZsfAKIMAhgCNsEPgHkGOQ1jCESSEBWp1GzNgk0BPlUCMQJRAgIhDSlOWQVEVSkJQQEBTgJuCUluKW4ANny9A3QXUwtrSHsAM2qnUuw3Zi9aeiYPfxC+KJ5RKQIJIXDRCPjFAOTU9MzsiVyCouKQBlQIOGZnbGbKVt8Ojk585WExSTGOAXy+LOTBnilkwoElzbA+ABEqWCsbbe82vwcXJBVQCbhJOTjOJSPj9SIZPLSCRgl4NN5mH6QP67dqgfzsVQpIb5ARSURCEJCB5SKmQxDSWHCIbcAak7hU1Soozoio2ey4zw7HwC-wFGGqaLcCJSgqiEmiOkISRXDRU0QCTT9TgjLllDGVWx2WrY4WAhC5IQqKWEwYaSSHRUFfihETpQ4skSiPR6IA */
    id: "Toggle",
    initial: "Enabled",
    context: {
      count: 0,
    },
    states: {
      Disabled: {},
      Enabled: {
        initial: "On",
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
        always: {
          target: "Disabled",
          cond: "Count greater than 5",
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
    guards: {
      "Count greater than 5": (context) => {
        return context.count > 5;
      },
    },
  }
);
