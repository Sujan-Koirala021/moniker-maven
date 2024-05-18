import React, { useState } from 'react';

const NameGenerator = () => {
  const [formData, setFormData] = useState({
    nameType: 'baby',
    gender: 'unisex',
    petType: '',
    origin: '',
    meaning: '',
    length: 'medium',
    popularity: 'unique',
    initialLetter: '',
    familyNames: '',
    preferences: '',
    easeOfPronunciation: 'easy',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your LLM model here with formData
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Name Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name Type</label>
          <select name="nameType" value={formData.nameType} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="baby">Baby</option>
            <option value="pet">Pet</option>
          </select>
        </div>
        
        {formData.nameType === 'pet' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Pet Type</label>
            <input type="text" name="petType" value={formData.petType} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., Dog, Cat" />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Cultural Origin</label>
          <input type="text" name="origin" value={formData.origin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., English, French" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Desired Meaning</label>
          <input type="text" name="meaning" value={formData.meaning} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., Brave, Joyful" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Name Length</label>
          <select name="length" value={formData.length} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Popularity</label>
          <select name="popularity" value={formData.popularity} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="popular">Popular</option>
            <option value="uncommon">Uncommon</option>
            <option value="unique">Unique</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Initial Letter</label>
          <input type="text" name="initialLetter" value={formData.initialLetter} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., A, B" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Family Names or Similar Names</label>
          <input type="text" name="familyNames" value={formData.familyNames} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., John, Jane" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Personal Preferences or Dislikes</label>
          <input type="text" name="preferences" value={formData.preferences} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., No names starting with X" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Ease of Pronunciation</label>
          <select name="easeOfPronunciation" value={formData.easeOfPronunciation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="complex">Complex</option>
          </select>
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Generate Name</button>
      </form>
    </div>
  );
};

export default NameGenerator;
