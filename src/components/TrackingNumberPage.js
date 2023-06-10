import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
const supabase = createClient(supabaseUrl, supabaseKey);
const TrackingNumberPage = ({ onBack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  useEffect(() => {
    fetchTrackingNumber();
  }, []);

  const fetchTrackingNumber = async () => {
    try {
      // Retrieve the latest tracking number from Supabase
      const { data, error } = await supabase
        .from('confirmation')
        .select('trackingNumber')
        .order('id', { ascending: false })
        .limit(1);

      if (error) {
        console.error('Error retrieving tracking number:', error);
        return;
      }

      if (data && data.length > 0) {
        const latestTrackingNumber = data[0].trackingNumber;
        setTrackingNumber(latestTrackingNumber);
      }
    } catch (error) {
      console.error('Error retrieving tracking number:', error);
    }
  };

  return (
    <div>
      <h1>Your Tracking Number is: </h1> 
      <p>Tracking Number: {trackingNumber}</p> 
      <button className="btn btn-primary mt-4"button onClick={onBack}>
            Back
            </button>
    </div>
  );
};

export default TrackingNumberPage;
