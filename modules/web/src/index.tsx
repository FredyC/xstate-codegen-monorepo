import { fetchMachine } from "~machinery/fetchMachine";
import { useMachine } from "~machinery/xstate/react";

export default function App() {
  const [current] = useMachine(fetchMachine);
  return null;
}
