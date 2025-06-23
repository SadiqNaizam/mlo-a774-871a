import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header layout component.
 * It renders the TopHeader organism, which contains the page title and action buttons.
 * This component is responsible for applying the correct positioning classes to make the header
 * fixed, ensuring it integrates with the overall application layout.
 */
const Header: React.FC = () => {
  // TopHeader is a <header> element that accepts a className.
  // We pass positioning classes to it directly to adhere to the layout requirements.
  // - fixed: Position relative to the viewport.
  // - top-0: Stick to the top edge.
  // - left-64: Offset from the left to account for the sidebar's width (w-64).
  // - right-0: Stretch to the right edge.
  // - z-30: Ensure it appears above the main content.
  return <TopHeader className="fixed top-0 left-64 right-0 z-30" />;
};

export default Header;
