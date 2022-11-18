/* eslint-disable */
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Testimony from './Testimony';
import '@testing-library/jest-dom';

test('should render Testimony component', () => {
  const linkElement = Renderer.create(<Testimony />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
