import { useMachine } from "@xstate/react";
import { callMachine } from "./machine/call-machine";

function App() {
  const [state, send] = useMachine(callMachine, {
    actions: {
      "Mute microphone": () => {
        alert("Microphone is mute");
      },
      "Unmute microphone": () => {
        alert("Microphone is unmute");
      },
    },
  });

  return (
    <div>
      {state.nextEvents.map((event) => (
        <button key={event} onClick={() => send(event)}>
          {event}
        </button>
      ))}
    </div>
  );
}

export default App;
