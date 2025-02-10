import { render } from '@testing-library/react';
import Collapsible from './CommandBar';

test('matches snapshot for Collapsible', () => {
  const { asFragment } = render(
    <Collapsible>
      <div>Collapsible Content</div>
    </Collapsible>
  )
  expect(asFragment()).toMatchSnapshot();
})
