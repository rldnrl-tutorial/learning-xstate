import { useMachine } from "@xstate/react";
import { authenticationMachine } from "./machine/authentication-machine";
import { callMachine } from "./machine/call-machine";
import { counterMachine } from "./machine/counter-machine";

function App() {
  const [callState, sendCall] = useMachine(callMachine, {
    actions: {
      "Mute microphone": () => {
        alert("Microphone is mute");
      },
      "Unmute microphone": () => {
        alert("Microphone is unmute");
      },
    },
  });

  const [counterState, sendCounter] = useMachine(counterMachine);

  const [authenticationState, sendAuthentication] = useMachine(
    authenticationMachine,
    {
      guards: {
        "Error is timeout error": () => false,
      },
    }
  );

  return (
    <div>
      <p>Counter: {counterState.context.count}</p>
      {counterState.nextEvents.map((event) => (
        <button key={event} onClick={() => sendCounter(event)}>
          {event}
        </button>
      ))}
      {callState.nextEvents.map((event) => (
        <button key={event} onClick={() => sendCall(event)}>
          {event}
        </button>
      ))}
      <pre>{JSON.stringify(authenticationState.value)}</pre>
      {authenticationState.nextEvents.map((event) => (
        <button key={event} onClick={() => sendAuthentication(event)}>
          {event}
        </button>
      ))}
    </div>
  );
}

export default App;
