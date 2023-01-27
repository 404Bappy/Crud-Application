import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@mui/material';
import imgage from '../img/profile.png'




const Details = () => {
    return (
        <div className='container mt-3'>
            <h1 className='wcBappy'>Welcome BAPPY!</h1>
            <img src={imgage} alt="" />

            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <h3>Name: <span>BAPPY</span></h3>
                    <h3>Age : <span>26</span></h3>
                </CardContent>
            </Card>
        </div>
    );
};

export default Details;