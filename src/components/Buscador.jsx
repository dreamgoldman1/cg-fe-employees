import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeesList from "./EmployeesList";


const Buscador = () => {
  const [search, setSearch] = useState('');
  const [sendForm, setSendForm] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [employeeList, setEmployeeList] = useState(true);

  useEffect(() => {
    async function fectData() {
      const { data } = await axios.get('http://localhost:8080/api/employee/');
      setEmployees(data.data)
    }
    async function fectDataEmployee(search) {
      const { data } = await axios.get('http://localhost:8080/api/employee/' + search);
      setEmployees(data.data)
    }

    console.log('Search: ' + typeof(search));
    if (sendForm && search === ''){
      fectData();
      setEmployeeList(true);
    }else if (sendForm && search !== '') {
      fectDataEmployee(search);
      setEmployeeList(false);
    }
    setSendForm(false);
  }, [sendForm, search]);

  function handleTextSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSendForm(true);
  }

  return (
    <>
    <div className='row search'>
      <div className='col-4'>
        <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search by Employee id..."
            onChange={(e) => handleTextSearch(e)}
            value={search}
            aria-label="Search" 
          />
          <button 
            className="btn btn-outline-success" 
          >Search</button>
        </form>
      </div>
    </div>
    <div className='row employees-list'>
      <div className='col-10'>
        <EmployeesList employees={employees} employeeList={employeeList} />
      </div>
    </div>
    </>
  )
}

export default Buscador;