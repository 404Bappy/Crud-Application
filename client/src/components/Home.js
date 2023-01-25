import React from 'react';

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2">
                    <button className='btn btn-primary'>Add Data</button>
                </div>



                <table class="table mt-2">
                    <thead >
                        <tr className=' table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Gk</td>
                            <td>Gk@gmail.com</td>
                            <td>Footballer</td>
                            <td>87</td>
                            
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'>Read <i class="fa-solid fa-eye"></i></button>
                                <button className='btn btn-warning'>Update <i class="fa-solid fa-wrench"></i></button>
                                <button className='btn btn-danger'>Delete <i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                 
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;