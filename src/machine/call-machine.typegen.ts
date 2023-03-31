// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: "Mute microphone" | "Unmute microphone";
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    "Mute microphone": "Mute";
    "Unmute microphone": "Unmute";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {};
  matchesStates:
    | "Microphone"
    | "Microphone.Muted"
    | "Microphone.Unmuted"
    | "Video"
    | "Video.Hiding video"
    | "Video.Showing video"
    | {
        Microphone?: "Muted" | "Unmuted";
        Video?: "Hiding video" | "Showing video";
      };
  tags: never;
}
