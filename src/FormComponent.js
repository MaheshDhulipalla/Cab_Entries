// FormComponent.js
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const FormComponent = () => {
  const [inputs, setInputs] = useState({
    Date: '',
    Amount: '',
    Trips: '',
    KmReading: '',
    Reason: '',
    PaidBy: '',
    Type: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

//   const handleRadioChange = (event) => {
//     const { value } = event.target;
//     setInputs({ ...inputs, radio: value });
//   };

  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post('http://localhost:5000/api/form-data', inputs); // Send POST request to backend
        console.log('Form data submitted successfully!');
        // Optionally, reset the form fields after successful submission
        setInputs({
          Date: '',
          Amount: '',
          Trips: '',
          KmReading: '',
          Reason: '',
          PaidBy: '',
          Type: ''
          // reset other input fields
        });
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Repeat for input2, input3, and input4 */}
      
      <div className="form-group">
        <label>Date:</label>
        <input type="date" name="Date" value={inputs.Date} onChange={handleInputChange} />
      </div>
      {/* Repeat for date2, date3, and date4 */}
      
      {/* <div className="form-group">
        <label>Radio Button 1:</label>
        <input type="radio" name="radio" value="option1" checked={inputs.radio === 'option1'} onChange={handleRadioChange} />
        <label>Option 1</label>
        <input type="radio" name="radio" value="option2" checked={inputs.radio === 'option2'} onChange={handleRadioChange} />
        <label>Option 2</label>
      </div> */}

      <div className="form-group">
        <label>Amount:</label>
        <input type="text" name="Amount" value={inputs.input1} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Trips:</label>
        <input type="text" name="Trips" value={inputs.input1} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>KM Reading:</label>
        <input type="text" name="KmReading" value={inputs.input1} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Reason:</label>
        <input type="text" name="Reason" value={inputs.input1} onChange={handleInputChange} />
      </div>
      
      <div className="form-group">
        <label>Paid By:</label>
        <select name="PaidBy" value={inputs.dropdown1} onChange={handleDropdownChange}>
          <option value="">Select option</option>
          <option value="option1">Mahesh</option>
          <option value="option2">DHR</option>
          <option value="option3">Harish</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Type:</label>
        <select name="Type" value={inputs.dropdown2} onChange={handleDropdownChange}>
          <option value="">Select option</option>
          <option value="option1">CNG</option>
          <option value="option2">Petrol</option>
          <option value="option3">Other</option>
          <option value="option2">Salary</option>
          <option value="option3">NPT Credit</option>
          <option value="option2">Holiday</option>
          <option value="option3">Leave</option>
        </select>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
