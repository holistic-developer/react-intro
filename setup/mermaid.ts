import { defineMermaidSetup } from "@slidev/types";

export default defineMermaidSetup(() => {
  return {
    sequence: {
      mirrorActors: false,
    },
  };
});
