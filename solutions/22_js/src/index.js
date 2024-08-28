import React,{ Component, useState } from "react";
import ReactDOM from 'react-dom'

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

const selectOptions = options.map(({ value, label }) => (
  <option key={label} value={value}>
    {' '}
    {label}
  </option>
))

const App = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
    file: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },

  }
  const [formData, setData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value, checked, type} = e.target
    if (type === 'checkbox') {
      setData({...formData, [name]: checked})
    } else if (type === 'file' ) {
      setData({...formData, [name] : e.target.files[0]})
    } else {
    setData({ ...formData, [name] : value})
    }
  }

  const onSubmit = (e) => {
    const {
      firstName,
      lastName,
      title,
      country,
      file,
      skills,
    } = formData

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      title,
      country,
      file,
      skills: formattedSkills,
    }
    e.preventDefault()
    console.log(data)
  }
  const onBlur = (e) => {
    const { name } = e.target
    setData({ ...formData, touched: { ...formData.touched, [name]: true } })
  }
  const validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
      lastName: '',
    }

    if (
      (formData.touched.firstName && formData.firstName.length < 3) ||
      (formData.touched.firstName && formData.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12'
    } else if (
      (formData.touched.lastName && formData.lastName.length < 3) ||
      (formData.touched.lastName && formData.lastName.length > 12)
    ) {
      errors.lastName = 'Last name must be between 2 and 12'
    }
    return errors
  }
  const {firstName, lastName, country, title} = formData
  const errors = validate()
  return (
    <div className="App">
      <h1>Add Student</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder="Enter First Name:"
          />
            {errors.firstName && <small>{errors.firstName}</small>}
          <input
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder="Enter Last Name:"
          />
            {errors.lastName && <small>{errors.lastName}</small>}

          <input
            id='title'
            name='title'
            value={title}
            onChange={handleChange}
            placeholder="Enter title:"
          />
          <select
          name="country"
          onChange={handleChange}
          id="country"
          value={country}
          >
            {selectOptions}
          </select>

       
          <p>Select your skills</p>
          <div>
            <input type='checkbox' id='html' name='html' onChange={handleChange} />
            <label htmlFor='html'>HTML</label>
          </div>
          <div>
            <input type='checkbox' id='css' name='css' onChange={handleChange} />
            <label htmlFor='css'>CSS</label>
          </div>
    
            <input
              type='checkbox'
              id='javascript'
              name='javascript'
              onChange={handleChange}
            />
            <label htmlFor='javascript'>JavaScript</label>
        <div>
          <input type='file' name='file' onChange={handleChange} />
        </div>


        </div>
        <button className="btn btn-success">Submit</button>
      </form>
      
    </div>

  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)