import { createMachine } from "xstate";

export const callMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdA6AsgSwGMAnAewAcALEgOzFwFcAXSAYgFVqBbJsAbQAYAuolBkSsPIzw0RIAB6IAtABYsygKwB2AGwBmZQE4AHAeUAmfuu0GANCACeibfyz9+Bs8v5Gr6y2c0AX0C7NExcQlJKGjoObmYIFhweAWEkEDEJKRl0hQRFT3U1XQBGbQ0-XU1dMy07RwRnV3cA5SNlQ35dbuDQjGwANTwIMBIsAGUqAHc8aigAAgA3YdGWAAkVpZWSVNlMyWlqWTzdA10sAx0PdsMzktsHRGVz3X5NTzLld58a3pAwwbbLAbCCzBbLEYkFiTEhTLaQ3bpfbZI65RCaEpGLD6fgWAzWAx3Iz1J4GVy1Qmfb7qX5-agkEbwdIAvbiA45UB5RT6ErFT7qSrVWqaEn5e5Y5QlEqdEo1Eo6Np-AERYjkKi0VlZQ7HJRmM588oCrpCuqPMXuLDqQz6XRaExGdolJX9FVRdV0ZIJTXs1GcpRSrEGGnfaqmCymhoFMyua3qMwmfSmb7O8L4VXRWhYOI8CDelE6sXxi7aK1fNphywis2y6MGKXqdrOEv+IIhf4uoaQvPatEIfRFS7WeMdQmlB6RqUuOvSwldIwWIy6bQpwGQibTMHw0bdjnyRCl7HDgzuW6lYlmgrnSUlPyLuMY5TaTStvrhTujYHDTcQ7dItn53sBWjMxtAXR9CSJUVJywB0PG+S54xpZRgmCIA */
  tsTypes: {} as import("./call-machine.typegen").Typegen0,
  id: "Call",
  type: "parallel",
  states: {
    Microphone: {
      states: {
        Muted: {
          on: {
            Unmute: {
              actions: "Unmute microphone",
              target: "Unmuted",
            },
          },
        },

        Unmuted: {
          on: {
            Mute: {
              actions: "Mute microphone",
              target: "Muted",
            },
          },
        },
      },

      initial: "Muted",
    },
    Video: {
      states: {
        "Showing video": {
          on: {
            "Hide video": "Hiding video",
          },
        },
        "Hiding video": {
          on: {
            "Show video": "Showing video",
          },
        },
      },

      initial: "Showing video",
    },
  },
});
