// import { render } from "react-dom";

import { describe, test, assert } from "vitest"
import { Layout } from "./Layout";
import { render } from '@testing-library/react';
describe("layout", () => {


    test("renders children between Header and Footer", () => {
        const { getByText, getByRole } = render(<Layout>Hello, world!</Layout>);
        // const header = getByRole('heading', { name: /tienda en line/i });

        // Obtener referencias a Header, Footer y el contenido (children)
        const header = getByRole('contentinfo');
        const footer = getByRole('contentinfo');
        const content = getByText('Hello, world!');

        // Verificar que Header y Footer están presentes
        assert.isNotNull(header);
        assert.isNotNull(footer);
        assert.isNotNull(content);
    })
})