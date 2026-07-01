import { useContext, useState } from "react";
import { CrudContext } from "./CRUDuseContext";



const CreateRead = () => {

    const {list, setList} = useContext(CrudContext);
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [dob, setDOB] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [mobileno, setMobileNo] = useState("")
    const [emailid, setEmailID] = useState("")


    const handleSubmit = () =>{   
        const obj ={
            name,
            surname,
            dob,
            age,
            gender,
            address,
            mobileno,
            emailid
        }

        setList([...list, obj])

        console.log(name);
        console.log(surname);
        console.log(dob);
        console.log(age);
        console.log(gender);
        console.log(address);
        console.log(mobileno);
        console.log(emailid);


        setName("")
        setSurname("")
        setDOB("")
        setAge("")
        setGender("")
        setAddress("")
        setMobileNo("")
        setEmailID("")
    }   
  return (
    <div>
            <input type="text" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Surname" value={surname} onChange={(e) =>setSurname(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="DOB" value={dob} onChange={(e) =>setDOB(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Age" value={age} onChange={(e) =>setAge(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Gender" value={gender} onChange={(e) =>setGender(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Address" value={address} onChange={(e) =>setAddress(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Mobile-No" value={mobileno} onChange={(e) =>setMobileNo(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Email-ID" value={emailid} onChange={(e) =>setEmailID(e.target.value)}></input>
            <br></br>
            <button onClick={handleSubmit}>SUBMIT</button>

            <table border={1} style={{border:"3px solid darkgreen"}}>
                <thead style={{border:"2px solid darkgreen"}}>
                    <tr>
                        <td style={{border:"2px solid darkgreen"}}>NAME</td>
                        <td style={{border:"2px solid darkgreen"}}>SURNAME</td>
                        <td style={{border:"2px solid darkgreen"}}>DOB</td>
                        <td style={{border:"2px solid darkgreen"}}>AGE</td>
                        <td style={{border:"2px solid darkgreen"}}>GENDER</td>
                        <td style={{border:"2px solid darkgreen"}}>ADDRESS</td>
                        <td style={{border:"2px solid darkgreen"}}>MOBILE-NO</td>
                        <td style={{border:"2px solid darkgreen"}}>EMAIL-ID</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) =>(
                            <tr key={index}>
                                <td style={{border:"2px solid darkgreen"}}>{i.name}</td>
                                <td style={{border:"2px solid darkgreen"}}>{i.surname}</td>
                                <td style={{border:"2px solid darkgreen"}}>{i.dob}</td>
                                <td style={{border:"2px solid darkgreen"}}>{i.age}</td>
                                <td style={{border:"2px solid darkgreen"}}>{i.gender}</td>
                                <td style={{border:"2px solid darkgreen"}}>{i.address}</td>
                                <td style={{border:"2px solid darkgreen"}}>{i.mobileno}</td>
                                <td style={{border:"2px solid darkgreen"}}>{i.emailid}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default CreateRead
