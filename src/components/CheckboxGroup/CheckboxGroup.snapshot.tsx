import { render } from '@testing-library/react';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from '../Checkbox/Checkbox';

test('CheckboxGroup snapshot', () => {
  const { asFragment } = render(
    <CheckboxGroup name="group1" value={[]} onChange={() => {}}>
      <Checkbox value="option1" label="Option 1" />
      <Checkbox value="option2" label="Option 2" />
    </CheckboxGroup>
  );
  expect(asFragment()).toMatchSnapshot();
});
