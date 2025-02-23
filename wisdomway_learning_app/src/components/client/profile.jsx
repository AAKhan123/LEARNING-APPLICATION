import React, { useState } from 'react';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    // Add your logout logic here
  };

  return (
    <div className="profile-dropdown relative inline-block text-left">
      {/* Profile Button */}
      <button
        onClick={toggleDropdown}
        className="profile-button w-12 h-12 rounded-full flex items-center justify-center shadow-md focus:outline-none"
      >
        {/* You can replace this with an image for a profile picture */}
        <span className="profile-initial text-lg font-bold">A</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="menu-header py-2 px-4">
            <p className="menu-name text-sm font-medium">Adarsh Sharma</p>
            <p className="menu-email text-xs"></p>
          </div>
          <div className="menu-divider"></div>
          <button
            onClick={handleLogout}
            className="menu-logout block w-full text-left px-4 py-2 text-sm focus:outline-none"
            role="menuitem"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;