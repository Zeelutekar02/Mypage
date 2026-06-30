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
        setList(...list, obj)

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
            <input type="text" placeholder="DOB" value={dob} onChange={(e) =>setSurname(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Age" value={age} onChange={(e) =>setSurname(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Gender" value={gender} onChange={(e) =>setSurname(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Address" value={address} onChange={(e) =>setSurname(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Mobile-No" value={mobileno} onChange={(e) =>setSurname(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Email-ID" value={emailid} onChange={(e) =>setSurname(e.target.value)}></input>
            <br></br>
            <button onClick={handleSubmit}>SUBMIT</button>

            <table border={1}>
                <thead>
                    <tr>
                        <td>NAME</td>
                        <td>SURNAME</td>
                        <td>DOB</td>
                        <td>AGE</td>
                        <td>GENDER</td>
                        <td>ADDRESS</td>
                        <td>MOBILE-NO</td>
                        <td>EMAIL-ID</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) =>(
                            <tr key={index}>
                                <td>{i.name}</td>
                                <td>{i.surname}</td>
                                <td>{i.dob}</td>
                                <td>{i.age}</td>
                                <td>{i.gender}</td>
                                <td>{i.address}</td>
                                <td>{i.mobileno}</td>
                                <td>{i.emailid}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default CreateRead
