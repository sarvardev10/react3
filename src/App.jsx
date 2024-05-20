import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
      phone: phone,
      address: address,
    };

    setUsers([...users, newUser]);
    setName("");
    setAge("");
    setPhone("");
    setAddress("");
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col"> T/R</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h1 className="text-center">Add user</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control my-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    className="form-control my-2"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="form-control my-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control my-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Add User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
