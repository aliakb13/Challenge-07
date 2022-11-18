/* eslint-disable */
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Faq from './Faq';
import '@testing-library/jest-dom';

test('should render Faq component', () => {
  const linkElement = Renderer.create(<Faq />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
