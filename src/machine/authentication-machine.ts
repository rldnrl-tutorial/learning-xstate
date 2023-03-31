import { createMachine } from "xstate";

export const authenticationMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEECuAXAFmAduglgMYCGBA9jgHQDC2hA1vjlAASqxgBOLADlwLb5YsfBVgsANmABuYCQGIACgKEixLCGHTF8ElpzCEw+WRADaABgC6iUDzIjyOWyAAeiALQBGAMyULAGwATADsACw+ISEAnBbR8WEhADQgAJ6IXgAcmZReAWERmUFxPtFB0T4AvpUpaFi4BCRONHSMzGwc3HycgsKiOOJSsgrKPar94prauvqGxqZmXjZIIPaO-S7uCB4+QbkBRUF5Fj6BIZkArCnpCKEBlPnZwRfnPl7RYdW1GNh4RKT9FqGNqsdhcXgqPrqIZyJSQtQDDRaHR6AxGEyQMxBZZ2Bz4JybTx+MKZCwhXaZD7BPLRC4Ba6IC5vSiRCykooWC5BCJeao1EA4MiaeArOq-RoAiguNb4jYrLYeUIhSiJaJ5LwXMIBJlFBnbHx+TI+C500LRTIBLxhblfEBihr-Zq0YFMUGdCFjKGImESaV4gnyzzFPylEJeIKXE4G7V6pkPfJhLInALagLRW32v5NQEAOTILFGvQRfvWUsD2yC5RVMXVmu1PkOseZrPZxS5PIzPwd2YolDzPWIvpWMoDoAVwZZ0TDEYuUZ82qCerefi8FneFuCIWCFk+-MzEuayAggmcw-9crHQYsFkoF2iAR8BTO5NOyTSGWy+yf5zZRwuFr5SogA */
  tsTypes: {} as import("./authentication-machine.typegen").Typegen0,
  id: "Authentication",
  initial: "Checking user permissions level",
  states: {
    "Checking user permissions level": {
      on: {
        "Permissions detail received": [
          {
            target: "Admin",
            cond: "User is admin",
          },
          {
            target: "Normal",
            actions: [
              "Say hello to normal user",
              "Report to API that normal user logged in",
            ],
            cond: "User is Normal",
          },
          "No Permission",
        ],
      },
    },
    "No Permission": {},
    Normal: {},
    Admin: {},
  },
});
