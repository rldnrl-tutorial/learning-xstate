// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.Authentication.Checking user permissions level:invocation[0]": {
      type: "done.invoke.Authentication.Checking user permissions level:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.Authentication.Checking user permissions level:invocation[0]": {
      type: "error.platform.Authentication.Checking user permissions level:invocation[0]";
      data: unknown;
    };
    "xstate.after(1500)#Authentication.Checking user permissions level": {
      type: "xstate.after(1500)#Authentication.Checking user permissions level";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    "Check user permissions": "done.invoke.Authentication.Checking user permissions level:invocation[0]";
  };
  missingImplementations: {
    actions:
      | "Report to API that normal user logged in"
      | "Say hello to normal user";
    delays: never;
    guards: "Error is timeout error";
    services: never;
  };
  eventsCausingActions: {
    "Report to API that normal user logged in": "done.invoke.Authentication.Checking user permissions level:invocation[0]";
    "Say hello to normal user": "done.invoke.Authentication.Checking user permissions level:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    "Error is timeout error": "error.platform.Authentication.Checking user permissions level:invocation[0]";
    "User is Normal": "done.invoke.Authentication.Checking user permissions level:invocation[0]";
    "User is admin": "done.invoke.Authentication.Checking user permissions level:invocation[0]";
  };
  eventsCausingServices: {
    "Check user permissions": "Retry" | "xstate.init";
  };
  matchesStates:
    | "Admin"
    | "Cancelled"
    | "Checking user permissions level"
    | "No Permission"
    | "Normal"
    | "Time out";
  tags: never;
}
