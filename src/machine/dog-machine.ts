import { createMachine } from "xstate";

export const dogMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBWAbMYADgMQDKAhgLa66wAEAZqqhANoAMAuoqIarAEsALgNQA7HiAAeiAIwAWAEwZ582QA55AVgDsmgMyLF89QBoQAT0QBaWVvkYdW-ey2KAbPICc7RTsUAvgHmaJg4+ETEADKoAK4QdGKoArBgHNxIIHyCIuKSMgi6juo6+vpeiupGFRrmVgjWXg7qsu766l7uXm6KhvJBIejYAO7kANZgxABi5DT05HgEhOmS2cKiEpkF1ors7I7uWu6KWnU2uxj6rfLsx1oDIKEj42AYpBGEFtFxCUkpaVxVvx1nktjY7MpjIoNE4zggNOoMO51PotC0POp3K1Og8nlhRhMMAAhMBQKACMRQYgAcQEADcwHQACoAJzA5CEK0ya1ym1A238GHY6l8vVulUqXi8cK0rgwsi8slk7GVR2qOn6DySEDgklCQJyG3y5xMBzVp0sJshznY8jK+m0uy8uKG4SWBpBfOk4K8+gwVXYVxOcMazWu4vuwUeroJYA9vONDV2+yhMIt9XaSJRWh8aKDhnULrCsbeH3qvGBCbBDQUWn9uyD6bkHnl2fRyKxXXcReehNIAGNyGyIPGjdXbNp64HZMHLQgPPtkajkXp-GVnVG8SWSWSKVBR6D+eC3BhUyUmwhynWNKi-P57O5fEEgkA */
  id: "Dog",
  initial: "Asleep",
  states: {
    Asleep: {
      on: {
        "Samlls food": "Awake.Sleepy",
        "Loud noise": "Awake.Scared",
      },
    },
    Awake: {
      on: {
        "Falls asleep": "Asleep",
      },

      states: {
        Sleepy: {
          on: {
            "Loud noise": "Scared"
          }
        },

        Scared: {},
        Begging: {
          on: {
            "Give Treat": {
              target: "Begging",
              internal: true
            }
          }
        }
      },

      initial: "Sleepy"
    },
  },
});