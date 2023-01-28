import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@mui/material';
import imgage from '../img/profile.png'




const Details = () => {
    return (
        <div className='container mt-3'>
            <h1 className='wcBappy'>Welcome BAPPY!</h1>
            <img style={{ width: 50 }} src={imgage} alt="" />

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className='left_view'>
                        <h3 className='mt-3'>Name: <span style={{ fontWeight: 400 }}>BAPPY</span></h3>
                        <h3 className='mt-3'>Age : <span style={{ fontWeight: 400 }}>26</span></h3>
                    </div>
                    <div className="right_view">

                    </div>

                </CardContent>
            </Card>
        </div>
    );
};

export default Details;