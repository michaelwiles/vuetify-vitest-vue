import { describe, it, expect } from "vitest";

import HelloWorld from "./HelloWorld.vue";
import { render, screen } from "@testing-library/vue";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
describe("HelloWorld", () => {
  it("renders properly", () => {
    render(HelloWorld, {
      global: { plugins: [vuetify] },
    });
    screen.debug();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
