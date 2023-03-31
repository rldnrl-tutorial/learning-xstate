import { useMachine } from "@xstate/react";
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
    </div>
  );
}

export default App;
