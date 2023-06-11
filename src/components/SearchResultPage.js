import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const SearchResultPage = ({ trackingNumber, onBack }) => {
  const [status, setStatus] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [remark, setRemark] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
        const supabase = createClient(supabaseUrl, supabaseKey);

       // Search for the tracking number in both the 'confirmation' and 'bigfive' tables
       const { data: confirmationData, error: confirmationError } = await supabase
       .from('confirmation')
       .select('status, firstName, middleName, lastName, remark')
       .eq('trackingNumber', trackingNumber)
       .limit(1);

     const { data: bigfiveData, error: bigfiveError } = await supabase
       .from('bigfive')
       .select('status, firstName, middleName, lastName, remark')
       .eq('trackingNumber', trackingNumber)
       .limit(1);

     // Handle errors
     if (confirmationError) {
       console.error('Error retrieving data from confirmation table:', confirmationError);
     }

     if (bigfiveError) {
       console.error('Error retrieving data from bigfive table:', bigfiveError);
     }

     if (confirmationData && confirmationData.length > 0) {
       const retrievedStatus = confirmationData[0].status;
       const retrievedFirstName = confirmationData[0].firstName;
       const retrievedMiddleName = confirmationData[0].middleName;
       const retrievedLastName = confirmationData[0].lastName;
       const retrievedRemark = confirmationData[0].remark;

       setStatus(retrievedStatus);
       setFirstName(retrievedFirstName);
       setMiddleName(retrievedMiddleName);
       setLastName(retrievedLastName);
       setRemark(retrievedRemark);
     }

     if (bigfiveData && bigfiveData.length > 0) {
       const retrievedStatus = bigfiveData[0].status;
       const retrievedFirstName = bigfiveData[0].firstName;
       const retrievedMiddleName = bigfiveData[0].middleName;
       const retrievedLastName = bigfiveData[0].lastName;
       const retrievedRemark = bigfiveData[0].remark;

       setStatus(retrievedStatus);
       setFirstName(retrievedFirstName);
       setMiddleName(retrievedMiddleName);
       setLastName(retrievedLastName);
       setRemark(retrievedRemark);
     }

     if ((!confirmationData || confirmationData.length === 0) && (!bigfiveData || bigfiveData.length === 0)) {
       console.log('No matching tracking number found');
     }
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
     <p>Remark: {remark}</p>

     <button className="btn btn-primary mt-4" onClick={onBack}>
       Back
     </button>
   </div>
 </div>
);
};

export default SearchResultPage;