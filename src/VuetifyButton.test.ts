import { describe, it, expect } from "vitest";

import HelloWorld from "./VuetifyButton.vue";
import { render, screen } from "@testing-library/vue";

import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
import VBtn from "vuetify/components";

const vuetify = createVuetify({
    components: [VBtn]
});
describe("Vuetify Button", () => {
    it("renders properly", () => {
        render(HelloWorld, {
            global: {plugins: [vuetify]},
        });
        screen.debug();

        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
