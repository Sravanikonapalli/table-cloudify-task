import React, { useState } from 'react';
import './App.css';
import { FaCaretDown } from 'react-icons/fa'; // Importing the dropdown icon from react-icons
import { MdDelete } from "react-icons/md";

function App() {
  const [rows, setRows] = useState([{ option1: '', option2: [], dropdownOpen: false }]);
  const [options1] = useState(['HTML', 'CSS', 'JavaScript', 'ReactJs']);
  const [options2, setOptions2] = useState(['Option A', 'Option B', 'Option C']);
  const [addOptionInLabel2, setAddOptionInLabel2] = useState('');

  // Add a new row to the table
  const handleAddRow = () => {
    setRows([...rows, { option1: '', option2: [], dropdownOpen: false }]);
  };

  // Handle selection in Label 1 (Single Select Dropdown)
  const handleSelectOption1 = (index, value) => {
    const newRows = [...rows];
    newRows[index].option1 = value; // Update the selected value for the row
    setRows(newRows);
  };

  // Handle deleting the selected option in Label 1
  const handleDeleteOption1 = (index) => {
    const newRows = [...rows];
    newRows[index].option1 = ''; // Clear the selected option
    setRows(newRows);
  };

  // Handle selection in Label 2 (Multi-Select Dropdown with Tags)
  const handleSelectOption2 = (index, value) => {
    const newRows = [...rows];
    if (newRows[index].option2.includes(value)) {
      // Remove the option if it's already selected
      newRows[index].option2 = newRows[index].option2.filter((item) => item !== value);
    } else {
      // Add the option if it's not already selected
      newRows[index].option2.push(value);
    }
    setRows(newRows);
  };

  // Handle adding a new option in Label 2
  const handleAddOption2 = () => {
    if (addOptionInLabel2.trim() !== '' && !options2.includes(addOptionInLabel2)) {
      setOptions2([...options2, addOptionInLabel2]); // Add the new option
      setAddOptionInLabel2(''); // Clear the input field
    }
  };

  // Toggle the dropdown visibility in Label 2
  const handleToggleDropdown = (index) => {
    const newRows = [...rows];
    newRows[index].dropdownOpen = !newRows[index].dropdownOpen;
    setRows(newRows);
  };

  // Handle deleting a row
  const handleDeleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index); // Remove row by index
    setRows(newRows);
  };

  return (
    <div className='container'>
      <h1>Table</h1>
      {/* Table structure */}
      <table className='table-container'>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate through each row */}
          {rows.map((row, index) => (
            <tr key={index}>
              {/* Label 1: Single Select Dropdown */}
              <td>
                <div className="label-1-container">
                  {row.option1 ? (
                    <div className="selected-label-1">
                      {row.option1}
                      <button className="remove-btn" onClick={() => handleDeleteOption1(index)}>×</button>
                    </div>
                  ) : (
                    <div className="select-bar">
                      <select
                        value={row.option1}
                        onChange={(e) => handleSelectOption1(index, e.target.value)}
                        className="select-dropdown"
                      >
                        <option value="">Select Option</option>
                        {options1.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </td>

              {/* Label 2: Multi-Select Dropdown with Tags */}
              <td>
                <div className="multi-select">
                  <div className="select-bar">
                    {row.option2.length === 0 ? (
                      <button onClick={() => handleToggleDropdown(index)} className="select-dropdown">
                        Select Options
                        <FaCaretDown className="dropdown-icon" />
                      </button>
                    ) : (
                      <div className="selected-options-container">
                        {row.option2.map((option) => (
                          <div key={option} className="selected-option-box">
                            {option}
                            <button className="remove-btn" onClick={() => handleSelectOption2(index, option)}>×</button>
                          </div>
                        ))}
                        <button onClick={() => handleToggleDropdown(index)} className="select-dropdown">
                          Select Options
                          <FaCaretDown className="dropdown-icon" />
                        </button>
                      </div>
                    )}
                    {row.dropdownOpen && (
                      <div className="dropdown-body">
                        {options2.map((option) => (
                          <div key={option} className="dropdown-item">
                            <label>
                              <input
                                type="checkbox"
                                checked={row.option2.includes(option)}
                                onChange={() => handleSelectOption2(index, option)}
                              />
                              {option}
                            </label>
                          </div>
                        ))}
                        <div className="add-option">
                          <input
                            type="text"
                            value={addOptionInLabel2}
                            onChange={(e) => setAddOptionInLabel2(e.target.value)}
                            placeholder="Add new option"
                          />
                          <button onClick={handleAddOption2}>+ Add</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </td>

              {/* Action: Delete button for each row */}
              <td className='delete-icon'>
                  <MdDelete size={25} onClick={() => handleDeleteRow(index)} className="delete-btn"/>            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn" onClick={handleAddRow}>+ Add New Row</button>
    </div>
  );
}

export default App;
