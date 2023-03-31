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

  const handleMute = () => {
    if (state.matches("Microphone.Muted")) {
      send("Unmute");
    } else if (state.matches("Microphone.Unmuted")) {
      send("Mute");
    }
  };

  return (
    <div>
      <button onClick={handleMute}>
        {state.matches("Microphone.Muted") ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}

export default App;
