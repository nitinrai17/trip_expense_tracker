import {Typography } from '@material-ui/core';


const Footer = () =>{
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="flex justify-center items-center flex-col mt-5">
                <Typography variant="h7">Contact us </Typography>
                <Typography variant="h7">nitinrai17@gmail.com</Typography>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <Typography variant="h7">@TET 2022 </Typography>
                <Typography variant="h7">All rights reserve </Typography>
            </div>
        </div>    
    );  
}

export default Footer;