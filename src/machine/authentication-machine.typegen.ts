// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions:
      | "Report to API that normal user logged in"
      | "Say hello to normal user";
    delays: never;
    guards: "User is Normal" | "User is admin";
    services: never;
  };
  eventsCausingActions: {
    "Report to API that normal user logged in": "Permissions detail received";
    "Say hello to normal user": "Permissions detail received";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    "User is Normal": "Permissions detail received";
    "User is admin": "Permissions detail received";
  };
  eventsCausingServices: {};
  matchesStates:
    | "Admin"
    | "Checking user permissions level"
    | "No Permission"
    | "Normal";
  tags: never;
}
