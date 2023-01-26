import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container'>
            <NavLink to="/">home</NavLink>

            <form>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        
                        <label for="exampleInputPassword1" class="form-label">Discription</label>
                        <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea>
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Register;