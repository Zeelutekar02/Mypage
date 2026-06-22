import axios from "axios";
import React, {useEffect, useState} from "react";
import './Dummy.css'


const DummyUser = () => {

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function dataView()
    {
        axios.get('https://dummyjson.com/users')
        .then((res) =>{
            setList(res.data.users)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    useEffect(() =>{
        dataView()
    }, [count])
  
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>MAIDENNAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>BIRTHDATE</th>
                    <th>IMAGE</th>
                    <th>BLOODGROUP</th>
                    <th>HEIGHT</th>
                    <th>WEIGHT</th>
                    <th>EYECOLOR</th>
                    <th>HAIR</th>
                    <th>IP</th>
                    <th>ADDRESS</th>
                    <th>COORDINATES</th>
                    <th>MACADDRESS</th>
                    <th>UNIVERSITY</th>
                    <th>BANK</th>
                    <th>COMPANY</th>
                    <th>ADDRESS</th>
                    <th>COORDINATES</th>
                    <th>COUNTRY</th>
                    <th>EIN</th>
                    <th>SSN</th>
                    <th>USERAGENT</th>
                    <th>CRYPTO</th>
                    <th>ROLE</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((i, index) =>(
                        <tr key={index}>
                            <td>{i.id}</td>
                            <td>{i.firstName}</td>
                            <td>{i.lastName}</td>
                            <td>{i.maidenName}</td>
                            <td>{i.age}</td>
                            <td>{i.gender}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                            <td>{i.username}</td>
                            <td>{i.password}</td>
                            <td>{i.birthDate}</td>
                            <td>{i.image}</td>
                            <td>{i.bloodGroup}</td>
                            <td>{i.height}</td>
                            <td>{i.weight}</td>
                            <td>{i.eyeColor}</td>
                            {/* <td>{i.address.coordinates.lat}</td> */}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DummyUser
