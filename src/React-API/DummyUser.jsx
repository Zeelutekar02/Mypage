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
        <h1 style={{textAlign:"center"}}>USERS-LIST</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th style={{backgroundColor:"grey"}}>ID</th>
                    <th style={{backgroundColor:"grey"}}>FIRSTNAME</th>
                    <th style={{backgroundColor:"grey"}}>LASTNAME</th>
                    <th style={{backgroundColor:"grey"}}>MAIDENNAME</th>
                    <th style={{backgroundColor:"grey"}}>AGE</th>
                    <th style={{backgroundColor:"grey"}}>GENDER</th>
                    <th style={{backgroundColor:"grey"}}>EMAIL</th>
                    <th style={{backgroundColor:"grey"}}>PHONE</th>
                    <th style={{backgroundColor:"grey"}}>USERNAME</th>
                    <th style={{backgroundColor:"grey"}}>PASSWORD</th>
                    <th style={{backgroundColor:"grey"}}>BIRTHDATE</th>
                    <th style={{backgroundColor:"grey"}}>IMAGE</th>
                    <th style={{backgroundColor:"grey"}}>BLOODGROUP</th>
                    <th style={{backgroundColor:"grey"}}>HEIGHT</th>
                    <th style={{backgroundColor:"grey"}}>WEIGHT</th>
                    <th style={{backgroundColor:"grey"}}>EYECOLOR</th>
                    <th style={{backgroundColor:"grey"}}>HAIR</th>
                    <th style={{backgroundColor:"grey"}}>IP</th>
                    <th style={{backgroundColor:"grey"}}>ADDRESS</th>
                    <th style={{backgroundColor:"grey"}}>COORDINATES</th>
                    <th style={{backgroundColor:"grey"}}>MACADDRESS</th>
                    <th style={{backgroundColor:"grey"}}>UNIVERSITY</th>
                    <th style={{backgroundColor:"grey"}}>BANK</th>
                    <th style={{backgroundColor:"grey"}}>COMPANY</th>
                    <th style={{backgroundColor:"grey"}}>ADDRESS</th>
                    <th style={{backgroundColor:"grey"}}>COORDINATES</th>
                    <th style={{backgroundColor:"grey"}}>EIN</th>
                    <th style={{backgroundColor:"grey"}}>SSN</th>
                    <th style={{backgroundColor:"grey"}}>USERAGENT</th>
                    <th style={{backgroundColor:"grey"}}>CRYPTO</th>
                    <th style={{backgroundColor:"grey"}}>ROLE</th>
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
                            <td>{i.hair.color}, {i.hair.type}</td>
                            <td>{i.ip}</td>
                            <td>{i.address.address}, {i.address.city}, {i.address.state}, {i.address.stateCode}, {i.address.postalCode}, {i.address.country}</td>
                            <td>{i.address.coordinates.lat}, {i.address.coordinates.lng}</td>
                            <td>{i.macAddress}</td>
                            <td>{i.university}</td>
                            <td>{i.bank.cardExpire}, {i.bank.cardNumber}, {i.bank.cardType}, {i.bank.currency}, {i.bank.iban}</td>
                            <td>{i.company.department}, {i.company.name}, {i.company.title}</td>
                            <td>{i.company.address.address}, {i.company.address.city}, {i.company.address.state}, {i.company.address.stateCode}, {i.company.address.postalCode}, {i.company.address.country}</td>
                            <td>{i.company.address.coordinates.lat}, {i.company.address.coordinates.lng}</td>
                            <td>{i.ein}</td>
                            <td>{i.ssn}</td>
                            <td>{i.userAgent}</td>
                            <td>{i.crypto.coin}, {i.crypto.wallet}, {i.crypto.network}</td>
                            <td>{i.role}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DummyUser
