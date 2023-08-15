import { render } from "@testing-library/react"
import { FirtsAPP } from "../src/FirstApp"

/* eslint-disable no-undef */
describe('Test in my first Component React <FirstApp/>', () => {

    test('should return to match with the snapshot ', () => {

      const title = 'Hola, soy Vegeta';
      const { container } = render(<FirtsAPP title={title} />);
      expect(container).toMatchSnapshot();
    });

});
