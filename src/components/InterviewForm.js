import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import FormReview from './FormReview';
const supabaseUrl = 'https://aehwgrirrnhmatqmqcsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHdncmlycm5obWF0cW1xY3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDg2NTg4MywiZXhwIjoxOTk2NDQxODgzfQ.DeXxoWY65kzpbvdxME16mAHj2KGMwDRg_jEGgUIxKc0';
const supabase = createClient(supabaseUrl, supabaseKey);

const InterviewForm = () => {
  const [selectedFormId, setSelectedFormId] = useState(null);
  const [formData, setFormData] = useState([]);

  const fetchFormData = async () => {
    try {
      const { data, error } = await supabase
        .from('confirmation')
        .select('id, trackingNumber, submissionDate');

      if (error) {
        console.error('Error retrieving data:', error);
      } else {
        console.log('Retrieved data:', data);
        setFormData(data);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, []);

  const openFormPopup = (id) => {
    setSelectedFormId(id);
  };

  return (
    <div>
      <h1>Form Review</h1>
      <table>
        <thead>
          <tr>
            <th>Tracking Number</th>
            <th>Submission Date</th>
            <th>Submission Folder</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((form) => (
            <tr key={form.id}>
              <td>{form.trackingNumber}</td>
              <td>{form.submissionDate}</td>
              <td>
                <button onClick={() => openFormPopup(form.id)}>Open Form</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedFormId && <FormReview formId={selectedFormId} />}
    </div>
  );
};

export default InterviewForm;
