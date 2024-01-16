import React from 'react';
import './User.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const ChangeRole = () => {

    const user = useLoaderData();

    const page = useNavigate();
    const handleUpdate = () => {
        page('/superadmin');
    }


    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const role = form.role.value;
        const name = form.name.value;
        const batch = form.batch.value;
        const city = form.city.value;
        const gender = form.gender.value;
        const phone = form.phone.value;
        const blood = form.blood.value;

        const updateuser = { name, batch, city, gender, phone, role, blood };

        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateuser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'UPDATED!',
                        text: 'user Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    handleUpdate();
                }
            })
    }

    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            <div className="card custom-card">
                <div className="card-body">
                    <form onSubmit={handleUpdateUser}>
                        <h3 className="card-title custom-title">
                            <input type="text" name="name" defaultValue={user.name} readOnly className="form-control custom-color" />
                            <p className="card-text">Role: {user.role}</p>
                        </h3>
                        
                        <div className="input-group mb-3">
                            <span className="input-group-text custom-b-t" id="batch-addon">Batch:</span>
                            <input type="text" name="batch" defaultValue={user.batch} readOnly className="form-control custom-b-t" aria-describedby="batch-addon" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text custom-b-t" id="city-addon">City:</span>
                            <input type="text" name="city" defaultValue={user.city} readOnly className="form-control custom-b-t" aria-describedby="city-addon" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text custom-b-t" id="gender-addon">Gender:</span>
                            <input type="text" name="gender" defaultValue={user.gender} readOnly className="form-control custom-b-t" aria-describedby="gender-addon" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text custom-b-t" id="phone-addon">Phone:</span>
                            <input type="text" name="phone" defaultValue={user.phone} readOnly className="form-control custom-b-t" aria-describedby="phone-addon" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text custom-b-t" id="blood-addon">Blood:</span>
                            <input type="text" name="blood" defaultValue={user.blood} readOnly className="form-control custom-b-t" aria-describedby="blood-addon" />
                        </div>
                        {/* Rest of your form */}
                        <select className="custom-select card-text" defaultValue="Select Role" name="role">
                            <option value="Select Role" disabled>Select Role</option>
                            <option value="member">Member</option>
                            <option value="admin">Admin</option>
                            <option value="superAdmin">Super Admin</option>
                        </select>
                        <p>
                            <button type='submit' className="btn btn-primary mt-2">Update</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangeRole;