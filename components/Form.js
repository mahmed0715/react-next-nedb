'use client';
import axios from 'axios';
import Datastore from 'nedb-promises';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: '/api'  // Replace this with your actual API base URL
});

const Form = ({ _id = null, data = {}, options }) => {
  const [name, setName] = useState(data?.name || '');
  const [sectors, setSectors] = useState(data?.sectors || []);
  const [agree, setAgree] = useState(data?.agree || false);
  const [id, setId] = useState(_id || null);
  const [successMessage, setSuccessMessage] = useState(``);
  const [error, setError] = useState({ name: '', sectors: '', agree: '' });
  

  const [optionsData, setOptionsData] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState(data?.sectors || []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/sectors");
  //       setOptionsData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching sector data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Use useEffect to fetch data and initialize the form
  // useEffect(() => {
  //   // Replace this with the actual ID fetching logic
  //   const fetchedId = null;  // Replace this with the actual fetched ID
  //   setId(fetchedId);
  // }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError({ ...error, name: '' });
  };

  const handleSectorChange = (selected) => {
    setSelectedOptions(selected);
    if (selected.length) {
      setError({ ...error, sectors: '' });
    } else {
      setError({ ...error, sectors: 'At least one sector should be selected' });
    }
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
    if (e.target.checked) {
      setError({ ...error, agree: '' });
    } else {
      setError({ ...error, agree: 'You must agree to the terms' });
    }
  };

  const handleUpdate = (e) => {
    if (!id) {
      // Handle the case where ID is not available for update
      return;
    }
    api.put(`/data/${id}`, {
      name: name,
      sectors: sectors,
      agree: agree,
    })
      .then(function (response) {
        console.log(response);
        const { data } = response;
        setId(data._id);
        setSuccessMessage(`Data updated successfully!`)
      })
      .catch(function (error) {
        console.log(error);
        // Handle the error and possibly set an error state
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()
    if (!name || !selectedOptions.length || !agree) {
      // Set errors for fields that are not filled
      setError({
        name: !name ? 'Name is required' : '',
        sectors: selectedOptions.length ? '' : 'At least one sector should be selected',
        agree: agree ? '' : 'You must agree to the terms',
      });
      return;
    }

    if (id) {
      handleUpdate(e);
    } else {
      api.post('/data', {
        name: name,
        sectors: selectedOptions,
        agree: agree,
      })
        .then(function (response) {
          console.log(response);
          const { data } = response;
          setId(data._id);
          setSuccessMessage('Data saved successfully!');
        })
        .catch(function (error) {
          console.log(error);
          // Handle the error and possibly set an error state
        });
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <h1 className="mt-3 mb-2 text-3xl font-extrabold tracking-tight text-slate-900 ">Please enter your name and pick the Sectors you are currently involved in.</h1>
      <hr />
      <div className="mb-4 mt-5">
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-5" role="alert">
            <p>{successMessage}</p>
          </div>
        )}
        {id && !_id &&(
          <p className='mb-5'> <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' href={id}> Update this entry {id} </a></p>
        )}
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
          value={name}
          onChange={handleNameChange}
        />
        {error.name && <p className="text-red-500 font-bold mt-1">{error.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="sectors" className="block text-gray-700 text-sm font-bold mb-2">
          Sectors
        </label>
        <Select
          id={id}
          isMulti
          closeMenuOnSelect={false} // Optional, customize based on your needs
          options={options}
          value={selectedOptions}
          onChange={handleSectorChange}
          placeholder="Select your sectors" />
        {/* <Select
      isMulti
      closeMenuOnSelect={false} // Optional, customize based on your needs
      options={options}
      value={selectedOptions}
      onChange={handleSectorChange}
      placeholder="Select your sectors"
    />
        <select
          id="sectors"
          name="sectors"
          multiple
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
          onChange={handleSectorChange}
        >
           
           {optionsData.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </optgroup>
        ))}
        </select> */}
        {error.sectors && <p className="text-red-500 font-bold mt-1">{error.sectors}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="agree" className="flex items-center">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={agree}
            onChange={handleAgreeChange}
          />
          <span className="ml-2 text-gray-700 text-sm font-bold">I agree to the terms and conditions</span>
        </label>
        {error.agree && <p className="text-red-500 font-bold mt-1">{error.agree}</p>}
      </div>
      <div>
        <button
          type="submit"
          className={`w-full p-3 bg-indigo-500 text-white font-bold rounded  'hover:bg-indigo-700'      `}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;