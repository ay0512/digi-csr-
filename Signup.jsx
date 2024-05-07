// Signup.jsx
import { useState } from 'react';
import { signupFields } from "../../constants/formField"
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [selectedRole, setSelectedRole] = useState('admin'); 

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });
  const handleRoleChange = (e) => setSelectedRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  const createAccount = () => {
    console.log("Received Data:", signupState);
    console.log("Selected Role:", selectedRole);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="my-5 flex items-center">
        <label className="block text-sm font-medium text-gray-700 mr-4">Select Role : </label>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <input
              id="admin"
              type="radio"
              value="admin"
              checked={selectedRole === 'admin'}
              onChange={handleRoleChange}
              className="mr-1"
            />
            <label htmlFor="admin" className="ml-1">Admin</label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="company"
              type="radio"
              value="company"
              checked={selectedRole === 'company'}
              onChange={handleRoleChange}
              className="mr-1"
            />
            <label htmlFor="company" className="ml-1">Company</label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="ngo"
              type="radio"
              value="ngo"
              checked={selectedRole === 'ngo'}
              onChange={handleRoleChange}
              className="mr-1"
            />
            <label htmlFor="ngo" className="ml-1">NGO</label>
          </div>
          <div className="flex items-center">
            <input
              id="benificiery"
              type="radio"
              value="benificiery"
              checked={selectedRole === 'benificiery'}
              onChange={handleRoleChange}
              className="mr-1"
            />
            <label htmlFor="benificiery" className="ml-1">Benificiery</label>
          </div>
        </div>
      </div>
      <div className="">
        {fields.map(field =>
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        )}
        <FormAction
          handleSubmit={handleSubmit}
          handleRoleChange={handleRoleChange}
          selectedRole={selectedRole}
          text="Signup"
        />
      </div>
    </form>
  );
}
