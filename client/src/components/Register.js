import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [inpval, setINP] = useState(
        {
            name : " ",
            email: " ",
            age : " ",
            mobile : " ",
            work : " ",
            address : " ",
            desc : " "
        }
    )

const setData = (e)=>{
    console.log(e.target.value);
    const {name, value} = e.target;
    setINP((preval)=>{
        return {
            ...preval,
            [name]: value
        }
    })
}



    return (
        <div className='container'>
            <NavLink to="/">home</NavLink>

            <form className='mt-4'>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="email" onChange={setData} value={inpval.name} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="password" value={inpval.email} name='email' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="password" value={inpval.age} name='age' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="password" value={inpval.mobile} name='mobile' class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="password" value={inpval.work} name='work' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="password" value={inpval.address} name='address' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">

                        <label for="exampleInputPassword1" class="form-label">Discription</label>
                        <textarea name="desc" value={inpval.desc} className='form-control' id="" cols="30" rows="6"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Register;