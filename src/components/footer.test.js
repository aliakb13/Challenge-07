/* eslint-disable */
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

test('should render Footer component', () => {
  const linkElement = Renderer.create(<Footer />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
