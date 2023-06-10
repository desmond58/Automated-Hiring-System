import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const SearchResultPage = ({ trackingNumber,onBack }) => {
  const [status, setStatus] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Perform the Supabase API request to fetch the status, middle name, and last name based on the tracking number
        const { data, error } = await supabase
          .from('confirmation')
          .select('status, firstName, middleName, lastName')
          .eq('trackingNumber', trackingNumber)
          .limit(1);

        if (error) {
          console.error('Error retrieving data:', error);
          return;
        }

        if (data.length === 0) {
          console.log('No matching tracking number found');
          return;
        }

        const retrievedStatus = data[0].status;
        const retrievedFirstName = data[0].firstName;
        const retrievedMiddleName = data[0].middleName;
        const retrievedLastName = data[0].lastName;

        // Update the state with the retrieved data
        setStatus(retrievedStatus);
        setFirstName(retrievedFirstName);
        setMiddleName(retrievedMiddleName);
        setLastName(retrievedLastName);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, [trackingNumber]);



  return (
    <div className="container mt-5">
      <div className="card p-5" style={{ backgroundColor: 'lightgreen' }}>
        <h2 className="mb-4">Interview Form Status</h2>
        <p className="mb-4">Hi {firstName} {middleName} {lastName},</p>
        <p>Your interview form is still under {status}.</p>
        
        <button className="btn btn-primary mt-4"button onClick={onBack}>
            Back
            </button>
      </div>
    </div>
  );
};

export default SearchResultPage;
