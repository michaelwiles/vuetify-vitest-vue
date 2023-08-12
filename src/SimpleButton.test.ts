import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/vue";
import SimpleButton from "@/SimpleButton.vue";

describe("SimpleButton", () => {
    it("renders properly", () => {
        render(SimpleButton);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
});
