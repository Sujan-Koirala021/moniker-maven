import React, { useState } from 'react';

const steps = [
  { id: 1, label: 'Name Type', input: 'nameType', options: ['Baby', 'Pet'] },
  { id: 2, label: 'Gender', input: 'gender', options: ['Male', 'Female', 'Unisex'] },
  { id: 3, label: 'Cultural Origin', input: 'origin' },
  { id: 4, label: 'Desired Meaning', input: 'meaning' },
  { id: 5, label: 'Name Length', input: 'length', options: ['Short', 'Medium', 'Long'] },
  { id: 6, label: 'Popularity', input: 'popularity', options: ['Popular', 'Uncommon', 'Unique'] },
  { id: 7, label: 'Initial Letter', input: 'initialLetter' },
  { id: 8, label: 'Family Names or Similar Names', input: 'familyNames' },
  { id: 9, label: 'Personal Preferences or Dislikes', input: 'preferences' },
  { id: 10, label: 'Ease of Pronunciation', input: 'easeOfPronunciation', options: ['Easy', 'Moderate', 'Complex'] },
];

const StepWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nameType: '',
    gender: '',
    origin: '',
    meaning: '',
    length: '',
    popularity: '',
    initialLetter: '',
    familyNames: '',
    preferences: '',
    easeOfPronunciation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your LLM model here with formData
    console.log('Form Data Submitted:', formData);
  };

  const currentFormStep = steps[currentStep];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Name Generator Wizard</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{currentFormStep.label}</label>
          {currentFormStep.options ? (
            <select
              name={currentFormStep.input}
              value={formData[currentFormStep.input]}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              {currentFormStep.options.map((option) => (
                <option key={option} value={option.toLowerCase()}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              name={currentFormStep.input}
              value={formData[currentFormStep.input]}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`w-full mr-2 p-2 rounded-md ${currentStep === 0 ? 'bg-gray-300 text-gray-500' : 'bg-gray-500 text-white'}`}
          >
            Previous
          </button>
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="w-full ml-2 bg-blue-500 text-white p-2 rounded-md"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="w-full ml-2 bg-green-500 text-white p-2 rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StepWizard;
