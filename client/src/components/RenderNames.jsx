import React from 'react';
import NameCard from './Card'; // Adjust the path according to your file structure

const renderNames = (response) => {
  if (!response) return null;

  // Trim any trailing comma and split the response
  const rawNames = response.replace(/,\s*$/, '').split(',');

  // Create a Set to store unique names
  const nameSet = new Set();

  const names = rawNames.map((name, index) => {
    const parts = name.trim().split('(');
    const word = parts[0]?.trim();
    const meaning = parts[1]?.replace(')', '').trim();
    
    // Add unique names to the Set
    if (word && !nameSet.has(word)) {
      nameSet.add(word);
      return <NameCard key={index} word={word} meaning={meaning} />;
    }
    return null;
  }).filter(name => name !== null); // Filter out null values

  return <div className="grid grid-cols-1 gap-4 mt-4">{names}</div>;
};

export default renderNames;
