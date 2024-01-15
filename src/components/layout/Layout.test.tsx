import { render } from "react-dom";
import {describe, test, assert} from "vitest"
import { Layout } from "./Layout";

describe("layout", () => {
    
    test("renders children between Header and Footer", () => {
        const { getByText, getByRole } = render(<Layout>Hello, world!</Layout>);
  

        // Obtener referencias a Header, Footer y el contenido (children)
        const header = getByRole('header');
        const footer = getByRole('footer');
        const content = getByText('Hello, world!');
    
        // Verificar que Header y Footer están presentes
        assert.isNotNull(header);
        assert.isNotNull(footer);
    })
})