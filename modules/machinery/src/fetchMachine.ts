import { Machine, interpret } from "@xstate/compiled";

type Data = {
  yeah: boolean;
};

interface Context {
  data: Data;
}

type Event =
  | { type: "MAKE_FETCH"; params: { id: string } }
  | { type: "CANCEL" }
  | { type: "done.invoke.makeFetch"; data: Data };

export const fetchMachine = Machine<Context, Event, "fetchMachine">({
  initial: "idle",
  states: {
    idle: {
      on: {
        MAKE_FETCH: "pending",
      },
    },
    pending: {
      invoke: [
        {
          src: "makeFetch",
          onDone: "success",
        },
      ],
    },
    success: {
      entry: ["celebrate"],
    },
  },
});
