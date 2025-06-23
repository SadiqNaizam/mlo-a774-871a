import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component for the main application layout.
 * It renders the primary navigation structure.
 * The underlying SidebarNav component is responsible for its own styling,
 * including its fixed position and width, as defined in the project context.
 */
const Sidebar: React.FC = () => {
  return <SidebarNav />;
};

export default Sidebar;
