import {Typography } from '@material-ui/core';


const Footer = () =>{
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="flex justify-center items-center flex-col mt-5">
                Contact us 
                nitinrai17@gmail.com
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                @TET 2022 
                All rights reserve
            </div>
        </div>    
    );  
}

export default Footer;