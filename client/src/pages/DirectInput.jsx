import React, { useState } from 'react';

const NameGenerator = () => {
  const [formData, setFormData] = useState({
    nameType: 'baby',
    gender: 'unisex',
    petType: '',
    origin: '',
    length: 'medium',
    popularity: 'unique',
    initialLetter: '',
    easeOfPronunciation: 'easy',
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Construct the query string from form data
    let query = `Generate a list of ${formData.nameType} names`;
    
    if (formData.nameType === 'pet' && formData.petType) {
      query += `for a ${formData.petType} `;
    }
    
    query += `that are ${formData.gender}, ${formData.length} in length, and ${formData.popularity}.`;
    
    if (formData.origin) {
      query += ` The names should have ${formData.origin} origin.`;
    }
    
    // if (formData.meaning) {
    //   query += ` They should mean "${formData.meaning}".`;
    // }
    
    if (formData.initialLetter) {
      query += ` The names should start with "${formData.initialLetter}".`;
    }
    
    // if (formData.familyNames) {
    //   query += ` Similar names in the family include ${formData.familyNames}.`;
    // }
    
    // if (formData.preferences) {
    //   query += ` Preferences and dislikes include: ${formData.preferences}.`;
    // }
    
    query += ` The names should be ${formData.easeOfPronunciation} to pronounce.`;
    
    // Add a request for unique, non-repeating names
    query += ` Return the name in the form of word with meaning in bracket and then comma. format: word1(meaning1), word2(meaning2)`;
    console.log('Generated Query:', query);

    try {
      const res = await fetch("http://localhost:3001/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query, model_name: "phi-3-gguf" })
      });
      const data = await res.json();
      console.log('API Response:', data);  // Log the response to the console
      setResponse(data.llm_response);
    } catch (error) {
      console.error("Error:", error);
    }
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
        {/* 
        <div>
          <label className="block text-sm font-medium text-gray-700">Desired Meaning</label>
          <input type="text" name="meaning" value={formData.meaning} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., Brave, Joyful" />
        </div> */}
        
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
{/*         
        <div>
          <label className="block text-sm font-medium text-gray-700">Family Names or Similar Names</label>
          <input type="text" name="familyNames" value={formData.familyNames} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., John, Jane" />
        </div>
         */}

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Personal Preferences or Dislikes</label>
          <input type="text" name="preferences" value={formData.preferences} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="e.g., No names starting with X" />
        </div> */}
        
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
      
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-bold">Generated Names:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NameGenerator;
