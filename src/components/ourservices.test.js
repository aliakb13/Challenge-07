/* eslint-disable */
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import OurServices from './OurServices';
import '@testing-library/jest-dom';

test('should render OurServices component', () => {
  const linkElement = Renderer.create(<OurServices />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
