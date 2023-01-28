import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@mui/material';
import imgage from '../img/profile.png'
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';




const Details = () => {
    return (
        <div className='container mt-3'>
            <h1 className='wcBappy'>Welcome BAPPY!</h1>
            <img style={{ width: 50 }} src={imgage} alt="" />

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="row">
                        <div className='left_view col-lg-6 col-md-6 col-12' >
                            <h3 className='mt-3'>Name: <span>BAPPY</span></h3>
                            <h3 className='mt-3'>Age : <span>26</span></h3>
                            <p className='mt-3'> <EmailIcon /> Email : <span>mbappy@54@gmail.com</span>  </p>
                            <p className='mt-3'><WorkIcon /> Occupation : <span>Software Developer</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className='mt-4'><PhoneIphoneIcon />Mobile : <span>01849675876</span></p>
                            <p className='mt-3'><LocationOnIcon />Location : <span>Dhaka, Bangladesh</span></p>
                            <p className='mt-3'>Discription : <span>Lorem ipsum dolor aliquam  Quos assumenreiciendis, magni in expedita eos perspiciatis totam veniam. Voluptas? </span></p>
                        </div>

                    </div>


                </CardContent>
            </Card>
        </div>
    );
};

export default Details;