import { actions, createMachine } from "xstate";

export const authenticationMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QEECuAXAFmAduglgMYCGBA9jgHQDC2hA1vjlAASqxgBOLADlwLb5YsfBVgsANmABuYCQGIIFMJSbSy9FWiy4CJclVpgGTVuy68BQkWMky5CNWX2icAbQAMAXU9fEoHjIRA38QAA9EAEZKACYPAE4AdgAOABZEgGZ4mKyY+IA2VIAaEABPKPiPSmSU-JiAVkj8+pjk+oyAXw6S7Ww8IlJXGjpGZjYObj5OQWFXcSlZBSUcFSdNSl7dAYNh41GzCctp6zm7RcccdRcKXzdIvyQQQODXUIiEAFpIxOr4+vy0vl8kkEhkGiVyggYol4pQMvkMh5gU0UpEPIl6l0ehg+npBhRdiYxuZJlZZrYFnJFMpVJcNFocVtroYRqZxhYpjMbDh5vYJBcrvj3N43DEHgEgvgQo93mjKDDIslvoqARkMqlIhkIYh2qlKB42h4Gv8cpEGliQJt+szCft2aTjuSeWcqVxOGROJQeBJSAAzD38DaM61C21sklHLmnSn8pzM27eULPKWvGWIL6wjwGgqpVoY+IZeptbUIIHJShF1LxP4eeqpGr5C1WvE7IxEg4csnc3mLeRuj1en3of3TIM6EOt1nEw6ck4UvkC5xC273JOS6Wgd6JH4ZSJo2uJZVZyIlmHVWqpeoJZKIhVN4MtoZtu0R2dOntU6jEHCEOS+NcvBQbyIDEhSxDEqSXi0kFoqBiQlh8dYVkW9SJM0NQtLq97jo+BLPuGM5dtGfLyGEsDoKQKjEL66BcAAFJEV4eAAlPIzbbE+U4dg6Ubzos-6PMmG7hOmV7RLWRpJHukQFChJYtJQlSJB4YJJIWkF1thuIcQSAAq+D8GALBkBg8gAEpgOgnClAJEqATgwGfIWPx1jkapxKk6LJKBJaFrCyT5DCGTKQ0kkFF03QgDgZAQHAoTscyAEpkBaafHWmZXnkh57rJyQIZEub6ihSr1nEoHfFpTKhvh06do63YuhISXCe8HxlZQiqZKkwWFAkiQxDE8l6jUAXqgNirQpelUTkMAByZAsAACkRKV2clDmpW1rSxMCPXJOieTJH88lghWhoQVkHgasF024VQ83TMQTWCeuqabum7WdeqPWeUk4JlIgu56rudRGkq0KVH8t06VQyAQIIG1rS16YybCGQBfU9QFq0VboyWipo7UOTVmqAWpNDNr6YZxkYM1b0iZ8A3lqBBZoft-XxEd9QlkCPwGmJOVqmayQU9V36-hIUgQHTq0M3W0R1JUQLBZ50KDQDCApHCtSFtCZoagVEUdEAA */
    tsTypes: {} as import("./authentication-machine.typegen").Typegen0,
    id: "Authentication",
    initial: "Checking user permissions level",
    schema: {} as {
      services: {
        "Check user permissions": {
          data: {
            user: {
              permissions: string[];
            };
          };
        };
      };
    },
    states: {
      "Checking user permissions level": {
        invoke: {
          src: "Check user permissions",
          onDone: [
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
            {
              target: "No Permission",
            },
          ],
          onError: [
            {
              cond: "Error is timeout error",
              target: "Time out",
            },
            {
              target: "No Permission",
            },
          ],
        },

        on: {
          Cancel: "Cancelled",
        },

        after: {
          "1500": "Time out",
        },
      },

      "No Permission": {},
      Normal: {},
      Admin: {},

      "Time out": {
        on: {
          Retry: "Checking user permissions level",
        },
      },

      Cancelled: {},
    },
  },
  {
    guards: {
      "User is admin": (_, event) => {
        return event.data.user.permissions.includes("admin");
      },
      "User is Normal": (_, event) => {
        return event.data.user.permissions.includes("normal");
      },
    },
    services: {
      "Check user permissions": async () => {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        return {
          user: {
            permissions: ["normal"],
          },
        };
      },
    },
  }
);
