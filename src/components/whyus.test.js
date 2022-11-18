/* eslint-disable */
import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import WhyUs from './WhyUs';
import '@testing-library/jest-dom';

test('should render WhyUs component', () => {
  const linkElement = Renderer.create(<WhyUs />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
