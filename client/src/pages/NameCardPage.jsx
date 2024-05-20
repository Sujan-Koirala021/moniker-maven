import React from 'react';
import renderNames from '../components/RenderNames'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { useLocation } from 'react-router-dom';

const NameCardPage = () => {
  const location = useLocation();
  const response = JSON.parse(new URLSearchParams(location.search).get('response'));
  
  return (
    <div className="max-w-md mx-auto p-6 mt-7 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">🔍 Discover Enchanting Monikers 🔍</h1>

      <div className="space-y-4">
        {response && renderNames(response)}
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/home" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search New</Link>
      </div>
    </div>
  );
};

export default NameCardPage;
