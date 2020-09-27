import { fetchMachine } from "~machinery/fetchMachine";
import { useMachine } from "@xstate/compiled/react";

export default function App() {
  const [current] = useMachine(fetchMachine);
  return null;
}
