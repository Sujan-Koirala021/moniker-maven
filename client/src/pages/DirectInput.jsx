import React, { useState } from 'react';
import '../components/spinner.css'; // Assuming you have a CSS file for the spinner styles

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    // Construct the query string from form data
    let query = `Generate a list of ${formData.nameType} names`;
    
    if (formData.nameType === 'pet' && formData.petType) {
      query += ` for a ${formData.petType}`;
    }
    
    query += ` that are ${formData.gender}, ${formData.length} in length, and ${formData.popularity}.`;
    
    if (formData.origin) {
      query += ` The names should have ${formData.origin} origin.`;
    }
    
    if (formData.initialLetter) {
      query += ` The names should start with "${formData.initialLetter}".`;
    }
    
    query += ` The names should be ${formData.easeOfPronunciation} to pronounce.`;
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
      console.log('API Response:', data);
      setResponse(data.llm_response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const renderNames = () => {
    if (!response) return null;
  
    // Trim any trailing comma and split the response
    const rawNames = response.replace(/,\s*$/, '').split(',');
  
    // Create a Set to store unique names
    const nameSet = new Set();
  
    const names = rawNames.map(name => {
      const parts = name.trim().split('(');
      const word = parts[0]?.trim();
      const meaning = parts[1]?.replace(')', '').trim();
      
      // Add unique names to the Set
      if (word && !nameSet.has(word)) {
        nameSet.add(word);
        return { word, meaning };
      }
      return null;
    }).filter(name => name !== null); // Filter out null values
  
    return names.map((name, index) => (
      <div key={index} className="card">
        <h3 className="card-title">{name.word}</h3>
        {name.meaning && <p className="card-meaning">{name.meaning}</p>}
      </div>
    ));
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Name Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
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
          <label className="block text-sm font-medium text-gray-700">Ease of Pronunciation</label>
          <select name="easeOfPronunciation" value={formData.easeOfPronunciation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="complex">Complex</option>
          </select>
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Generate Name</button>
      </form>
      
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="spinner"></div>
        </div>
      )}
      
      {!loading && response && (
        <div className="mt-4 grid grid-cols-1 gap-4">
          {renderNames()}
        </div>
      )}
    </div>
  );
};

export default NameGenerator;
