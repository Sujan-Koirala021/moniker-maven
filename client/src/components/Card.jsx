import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NameCard = ({ word, meaning }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 rounded-lg transition-transform transform hover:scale-105 duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-2xl flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          {word}
        </h3>
        {meaning && (
          <div className="flex items-center mt-2">
            {/* <i className="fas fa-info-circle text-gray-400 mr-1"></i> */}
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <i className="far fa-heart text-red-500 mr-1"></i>
              {meaning}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameCard;
