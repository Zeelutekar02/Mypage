import { use, useContext, useState } from "react";
import { CrudContext } from "./CRUDuseContext";



const DeleteUpdate = () => {

    const {list, setList} = useContext(CrudContext)
    const [editId, setEditId] = useState(null)


    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [dob, setDOB] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [religion, setReligion] = useState("")
    const [mobileno, setMobileNO] = useState("")
    const [emailid, setEmailID] = useState("")

    const handleSubmit = () =>{
        const obj ={
            name,
            surname,
            dob,
            age,
            gender,
            country,
            state,
            city,
            address,
            religion,
            mobileno,
            emailid
        }

        if(editId != null)
        {
            let copyData = [...list]
            copyData[editId] = obj
            setList(copyData)
            setEditId(null)
        }
        else
        {
            setList([...list, obj])
        }

        console.log(name);
        console.log(surname);
        console.log(dob);
        console.log(age);
        console.log(gender);
        console.log(country);
        console.log(state);
        console.log(city);
        console.log(address);
        console.log(religion);
        console.log(mobileno);
        console.log(emailid);

        setName("")
        setSurname("")
        setDOB("")
        setAge("")
        setGender("")
        setCountry("")
        setState("")
        setCity("")
        setAddress("")
        setReligion("")
        setMobileNO("")
        setEmailID("") 
    }

    const updateData = (item, index) =>{
        setName(item.name)
        setSurname(item.surname)
        setDOB(item.dob)
        setAge(item.age)
        setGender(item.gender)
        setCountry(item.country)
        setState(item.state)
        setCity(item.city)
        setAddress(item.address)
        setReligion(item.religion)
        setMobileNO(item.mobileno)
        setEmailID(item.emailid)
        setEditId(index)
    }

    const deleteData = (index) =>{
        let copyData = [...list]
        copyData.splice(index, 1)
        setList(copyData)
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
            <input type="text" placeholder="Country" value={country} onChange={(e) =>setCountry(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="State" value={state} onChange={(e) =>setState(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="City" value={city} onChange={(e) =>setCity(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Address" value={address} onChange={(e) =>setAddress(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Religion" value={religion} onChange={(e) =>setReligion(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Mobile-NO" value={mobileno} onChange={(e) =>setMobileNO(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Email-ID" value={emailid} onChange={(e) =>setEmailID(e.target.value)}></input>
            <br></br>
            <button onClick={handleSubmit}>SUBMIT</button>


            <table border={1} style={{border:"3px solid purple"}}>
                <thead style={{border:"3px solid purple"}}>
                    <tr>
                        <td style={{border:"3px solid purple"}}>NAME</td>
                        <td style={{border:"3px solid purple"}}>SURNAME</td>
                        <td style={{border:"3px solid purple"}}>DOB</td>
                        <td style={{border:"3px solid purple"}}>AGE</td>
                        <td style={{border:"3px solid purple"}}>GENDER</td>
                        <td style={{border:"3px solid purple"}}>COUNTRY</td>
                        <td style={{border:"3px solid purple"}}>STATE</td>
                        <td style={{border:"3px solid purple"}}>CITY</td>
                        <td style={{border:"3px solid purple"}}>ADDRESS</td>
                        <td style={{border:"3px solid purple"}}>RELIGION</td>
                        <td style={{border:"3px solid purple"}}>MOBILE-NO</td>
                        <td style={{border:"3px solid purple"}}>EMAIL-ID</td>
                        <td style={{border:"3px solid purple"}}>UPDATE</td>
                        <td style={{border:"3px solid purple"}}>DELETE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) =>(
                            <tr key={index}>
                                <td style={{border:"3px solid purple"}}>{i.name}</td>
                                <td style={{border:"3px solid purple"}}>{i.surname}</td>
                                <td style={{border:"3px solid purple"}}>{i.dob}</td>
                                <td style={{border:"3px solid purple"}}>{i.age}</td>
                                <td style={{border:"3px solid purple"}}>{i.gender}</td>
                                <td style={{border:"3px solid purple"}}>{i.country}</td>
                                <td style={{border:"3px solid purple"}}>{i.state}</td>
                                <td style={{border:"3px solid purple"}}>{i.city}</td>
                                <td style={{border:"3px solid purple"}}>{i.address}</td>
                                <td style={{border:"3px solid purple"}}>{i.religion}</td>
                                <td style={{border:"3px solid purple"}}>{i.mobileno}</td>
                                <td style={{border:"3px solid purple"}}>{i.emailid}</td>
                                <td style={{border:"3px solid purple"}}>
                                    <button onClick={() =>updateData(i, index)}>UPDATE</button>
                                </td>
                                <td style={{border:"3px solid purple"}}>
                                    <button onClick={() =>deleteData(index)}>DELETE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default DeleteUpdate
