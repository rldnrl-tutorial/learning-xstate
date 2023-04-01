import { createMachine } from "xstate";

export const dogMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBED2UB0BBWAbMYADgMQDKAhgLa66wAEAZqqhANoAMAuoqIarAEsALgNQA7HiAAeiAIwAWAEwZ582QA55AVgDsmgMyLF89QBoQAT0QBaWVvkYdW-ey2KAbPICc7RTsUAvgHmaJg4+ETEADKoAK4QdGKoArBgHNxIIHyCIuKSMgi6juo6+vpeiupGFRrmVgjWXg7qsu766l7uXm6KhvJBIejYAO7kANZgxABi5DT05HgEhOmS2cKiEpkF1ors7I7uWu6KWnU2uxj6rfLsx1oDIKEj42AYpBGEFtFxCUkpaVxVvx1nktjY7MpjIoNE4zggNOoMO51PotC0POp3K1Og8nlhRhMMAAhMBQKACMRQYgAcQEADcwHQACoAJzA5CEK0ya1ym1A238GHY6l8vVulUqXi8cK0rgwsi8slk7GVR2qOn6wUeQ3CS2IUlgQg5r3IDCEYBZAApZewAJTEPGLIhc3jA3n5GyGfY6Q53OHWQyXa6+WT6dw+rRKoJapIQOCSUJAnIbD0NMOIiN+yznJQYE4uXT2VGVXE6p2EJMgvnScFefQYKrsK4nf1NBvBu6lsIEsCV91ghq7fZQmGnbMIdpIlG6NoapVY+5avE9t4fequ5Og-ng7QN3bNsf1WQeeXT9HIrFddxd56E0gAY3IbIgfZTA9su8bB7hHn2yNRyJ6P4ZReDe+IvMSpLkpSr5bjWDQQnmSijnC5RaKexY6P49juL40YBEAA */
  id: "Dog",
  initial: "Asleep",
  states: {
    Asleep: {
      on: {
        "Samlls food": "Awake.Sleepy",
        "Loud noise": "Awake.Scared",
      },

      after: {
        "10000": "Awake",
      },
    },
    Awake: {
      on: {
        "Falls asleep": "Asleep",
      },

      states: {
        Sleepy: {
          on: {
            "Loud noise": "Scared",
          },
        },

        Scared: {},
        Begging: {
          on: {
            "Give Treat": {
              target: "Begging",
              internal: true,
            },
          },
        },
      },

      initial: "Sleepy",
    },
  },
});
