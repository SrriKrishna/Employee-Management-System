import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'
const EmployeeComponent = () => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const { id } = useParams();

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmail(response.data.email);
      }).catch(error => {
        console.error(error)
      })
    }
  }, [id])

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstname, lastname, email }
      console.log(employee);

      if (id) {
        updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigator('/')
        }).catch(error => {
          console.error(error)
        })
      } else {
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/')
        }).catch(error =>{
          console.error(error);
        })
      }

    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors }

    if (firstname.trim()) {
      errorsCopy.firstname = '';
    }
    else {
      errorsCopy.firstname = "First Name is required"
      valid = false;
    }

    if (lastname.trim()) {
      errorsCopy.lastname = '';
    }
    else {
      errorsCopy.lastname = "Last Name is required"
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    }
    else {
      errorsCopy.email = "Email is required"
      valid = false;
    }


    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center mb-4 fw-bold">Update Employee</h2>
    }
    else {
      <h2 className="text-center mb-4 fw-bold">Add Employee</h2>
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg border-0 p-4" style={{ width: '500px' }}>
        {
          pageTitle()
        }
        <form>
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">First Name:</label>
            <input
              type="text"
              placeholder="Enter Employee First Name"
              name="firstname"
              value={firstname}
              className={`form-control   ${errors.firstname ? 'is-invalid' : ''}`}
              onChange={(e) => setFirstname(e.target.value)}
            />

            {errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
          </div>

          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Last Name:</label>
            <input
              type="text"
              placeholder="Enter Employee Last Name"
              name="lastname"
              value={lastname}
              className={`form-control   ${errors.lastname ? 'is-invalid' : ''}`}
              onChange={(e) => setLastname(e.target.value)}
            />
            {errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}
          </div>

          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Email:</label>
            <input
              type="email"
              placeholder="Enter Employee Email"
              name="email"
              value={email}
              className={`form-control   ${errors.email ? 'is-invalid' : ''}`}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
          </div>

          <div className="text-center">
            <button className="btn btn-success px-4" onClick={saveOrUpdateEmployee}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeComponent
