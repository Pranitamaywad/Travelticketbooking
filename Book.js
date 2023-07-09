import React, {useState,useEffect }from "react";
import './book.css';
import axios from "axios";

const Sign = () =>{
     
    useEffect(()=>{
        axios.get('http://localhost:4001/api/app/')
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      },[])

    const [ename, setename] =  useState('');
    const [econtact, setecontact] =  useState('');
    const [eemail, seteemail] =  useState('');
    const [eplace, seteplace] =  useState('');
    const [earrivedate, setearrivedate] =  useState('');
    const [ecount, setecount] =  useState('');
    const [eaddress, seteaddress] =  useState('');
    const [eleave, seteleave] =  useState('');

    const addname = (event) =>{
        setename(event.target.value)
    };
    const addcontact = (event) =>{
        setecontact(event.target.value)
    };
    const addemail = (event) =>{
        seteemail(event.target.value)
    };
    const addplace = (event) =>{
        seteplace(event.target.value)
    };
    const addarrivedate = (event) =>{
        setearrivedate(event.target.value)
    };
    const addcount = (event) =>{
        setecount(event.target.value)
    };
    const addaddress = (event) =>{
        seteaddress(event.target.value)
    };
    const addleavedate = (event) =>{
        seteleave(event.target.value)
    };
    
    const clickHandler = (event) =>{
        event.preventDefault();

        setename('');
        setecontact('');
        seteemail('');
        seteplace('');
        setearrivedate('');
        setecount('');
        seteaddress('');
        seteleave('');
       
        const data={
            name:ename,
            contact:econtact,
            email:eemail,
            place:eplace,
            arriveldate:earrivedate,
            count:ecount,
            address:eaddress,
            leavedate:eleave

        };
        axios.post('http://localhost:4001/api/app/',{
            data:data
        }).then((res)=>{
            console.log(res)
            
            axios.get('http://localhost:4001/api/app/')
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }).catch(err=>console.log(`${err}, heres error in react post`))
    };
    
    return(
        <div className="sign">
             <div className="h1"> <h1>BOOK YOUR TRIP!</h1></div>
           <div className="flx">
           <div>
            <div className="form">
                <label>Full Name:</label>
                <input type="text"  value={ename} onChange={addname} placeholder="  Enter Your  Name"/>
            </div>
            <div className="form">
                <label>Contact Number:</label>
                <input type="number"  value={econtact} onChange={addcontact} placeholder="  Enter Your Number"/>
            </div>
            <div className="form">
                <label>Email:</label>
                <input type="email"  value={eemail} onChange={addemail} placeholder="  Enter Your Email"/>
            </div>
            <div className="form">
                <label>Where to:</label>
                <input type="text" value={eplace} onChange={addplace} placeholder="  Place You Want To Visit"/>
            </div>
            </div>
            <div>
            <div className="form">
                <label className="date" >Arrivals:</label>
                <input type="date" value={earrivedate} onChange={addarrivedate}/>
            </div>
            <div className="form">
                <label>Address:</label>
                <input type="text" placeholder="  Enter Your Address" value={eaddress} onChange={addaddress}/>
            </div>
            <div className="form">
                <label>How Many:</label>
                <input type="number" placeholder="  Number Of Guests" value={ecount} onChange={addcount}/>
            </div>
            <div className="form">
                <label>Leaving:</label>
                <input type="date" value={eleave} onChange={addleavedate}/>
            </div>
            </div>
           </div>
            <button type="submit" onClick={clickHandler}>Submit</button>
        </div>
    )
}
export default Sign;