import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
const supabase = createClient(supabaseUrl, supabaseKey);

const BigFiveCalculator = ({ onBack,id }) => {
  const [formData, setFormData] = useState(null);
  const [suggestedFields, setSuggestedFields] = useState([]);
  const [highestPath, setHighestPath] = useState('');
  const [scores, setScores] = useState({ E: 0, A: 0, C: 0, N: 0, O: 0 });
   

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from('bigfive')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching questions:', error.message);
      } else {
        setFormData(data);
      }
    };

    fetchQuestions();
  }, [id]);
  const backHandler = () => {
    onBack();
  };
  useEffect(() => {
    if (formData) {
      // Perform score calculations based on formData
      const E = 20 + parseInt(formData.question1 || 0) - parseInt(formData.question6 || 0) + parseInt(formData.question11 || 0) - parseInt(formData.question16 || 0) + parseInt(formData.question21 || 0) - parseInt(formData.question26 || 0) + parseInt(formData.question31 || 0) - parseInt(formData.question36 || 0) + parseInt(formData.question41 || 0) - parseInt(formData.question46 || 0);
      const A = 14 - parseInt(formData.question2 || 0) + parseInt(formData.question7 || 0) - parseInt(formData.question12 || 0) + parseInt(formData.question17 || 0) - parseInt(formData.question22 || 0) + parseInt(formData.question27 || 0) - parseInt(formData.question32 || 0) + parseInt(formData.question37 || 0) + parseInt(formData.question42 || 0) + parseInt(formData.question47 || 0);
      const C = 14 + parseInt(formData.question3 || 0) - parseInt(formData.question8 || 0) + parseInt(formData.question13 || 0) - parseInt(formData.question18 || 0) + parseInt(formData.question23 || 0) - parseInt(formData.question28 || 0) + parseInt(formData.question33 || 0) - parseInt(formData.question38 || 0) + parseInt(formData.question43 || 0) + parseInt(formData.question48 || 0);
      const N = 38 - parseInt(formData.question4 || 0) + parseInt(formData.question9 || 0) - parseInt(formData.question14 || 0) + parseInt(formData.question19 || 0) - parseInt(formData.question24 || 0) - parseInt(formData.question29 || 0) - parseInt(formData.question34 || 0) - parseInt(formData.question39 || 0) - parseInt(formData.question44 || 0) - parseInt(formData.question49 || 0);
      const O = 8 + parseInt(formData.question5 || 0) - parseInt(formData.question10 || 0) + parseInt(formData.question15 || 0) - parseInt(formData.question20 || 0) + parseInt(formData.question25 || 0) - parseInt(formData.question30 || 0) + parseInt(formData.question35 || 0) + parseInt(formData.question40 || 0) + parseInt(formData.question45 || 0) + parseInt(formData.question50 || 0);

      setScores({ E, A, C, N, O });

      // Determine the highest value path
      let highestScore = 0;

      if (E > highestScore) {
        highestScore = E;
        setHighestPath('Extroversion');
      }

      if (A > highestScore) {
        highestScore = A;
        setHighestPath('Agreeableness');
      }

      if (C > highestScore) {
        highestScore = C;
        setHighestPath('Conscientiousness');
      }

      if (N > highestScore) {
        highestScore = N;
        setHighestPath('Neuroticism');
      }

      if (O > highestScore) {
        highestScore = O;
        setHighestPath('Openness to Experience');
      }

      // Assign suggested career fields based on the highest value path
      let suggestedFields = [];

      switch (highestPath) {
        case 'Extroversion':
          suggestedFields = ['Marketing', 'Sales', 'Administrative', 'Agronomist'];
          break;
        case 'Agreeableness':
          suggestedFields = ['Production/Warehouse', 'Sales', 'Marketing', 'Human Resource', 'Agronomist'];
          break;
        case 'Conscientiousness':
          suggestedFields = ['Production/Warehouse', 'Account', 'Financial', 'Human Resource'];
          break;
        case 'Neuroticism':
          suggestedFields = ['Human Resource', 'Account', 'Financial', 'Production/Warehouse'];
          break;
        case 'Openness to Experience':
          suggestedFields = ['Marketing', 'Sales', 'Administrative', 'Account', 'Financial', 'Agronomist'];
          break;
        default:
          break;
      }

      setSuggestedFields(suggestedFields);
    }
  }, [formData]);

  return (
    <div>
      <h2>Suggested Career Fields:</h2>
      <p>Highest Value Path: <b>{highestPath}</b> </p>
      <p>Scores:</p>
      <ul>
        <li>Extroversion : {scores.E}</li>
        <li>Agreeableness: {scores.A}</li>
        <li>Conscientiousness: {scores.C}</li>
        <li>Neuroticism: {scores.N}</li>
        <li>Openness to Experience : {scores.O}</li>
      </ul>
      <h2>Suggested Career Fields:</h2>
      <ul>
        {suggestedFields.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ul>  <button className='button buttonNext' color='green' onClick={backHandler}>Back</button>
    </div>
  );
};

export default BigFiveCalculator;
