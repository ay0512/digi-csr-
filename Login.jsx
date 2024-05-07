// Login.jsx
import { useState } from 'react';
import { loginFields } from "../../constants/formField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [selectedRole, setSelectedRole] = useState('admin'); 

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    };

    const authenticateUser = () => {
        console.log("Authentication is done");
        console.log("Received data:", loginState);
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
                        <label htmlFor="admin" className="ml-1 cursor-pointer">Admin</label>
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
                        <label htmlFor="company" className="ml-1 cursor-pointer">Company</label>
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
                        <label htmlFor="ngo" className="ml-1 cursor-pointer">NGO</label>
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
                        <label htmlFor="benificiery" className="ml-1 cursor-pointer">Benificiery</label>
                    </div>
                </div>
            </div>
            <div className="-space-y-px">
                {fields.map(field =>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                )}
            </div>

            <FormExtra />
            <FormAction
                handleSubmit={handleSubmit}
                handleRoleChange={handleRoleChange}
                selectedRole={selectedRole}
                text="Login"
            />
        </form>
    );
}
