import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Rick&MortyApiCalling.css"

const RickMortyApiCalling = () => {

    const [character, setCharacter] = useState([]);
    const [location, setLocation] = useState([]);
    const [episode, setEpisode] = useState([]);

      useEffect(() =>{
          Promise.all([
              axios.get("https://rickandmortyapi.com/api/character"),
              axios.get("https://rickandmortyapi.com/api/location"),
              axios.get("https://rickandmortyapi.com/api/episode"),
          ])
          .then(([characterData, locationData, episodeData]) => {
              console.log(characterData)
              console.log(locationData)
              console.log(episodeData)  

              setCharacter(characterData.data.results);
              setLocation(locationData.data.results);
              setEpisode(episodeData.data.results)
          });
          
      });
  return (
    <div className="main-box">
        <div className="in-box">
          <h1 style={{backgroundColor:"lightpink", color:"lightcyan", textAlign:"center", fontSize:"30px", fontWeight:"400"}}>---RICK & MORTY API CALLING---</h1>
          <h3 style={{backgroundColor:"lightpink", color:"purple", width:"250px", height:"40px", textAlign:"center", margin:"10px"}}>Character-Data</h3>
            <table border={1} style={{border:"3px solid purple"}}>
                <thead style={{border:"2px solid lightpink"}}>
                    <tr>
                        <th style={{border:"2px solid lightpink"}}>ID</th>
                        <th style={{border:"2px solid lightpink"}}>NAME</th>
                        <th style={{border:"2px solid lightpink"}}>STATUS</th>
                        <th style={{border:"2px solid lightpink"}}>SPECIES</th>
                        <th style={{border:"2px solid lightpink"}}>GENDER</th>
                        <th style={{border:"2px solid lightpink"}}>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        character.map((i, index) =>(
                            <tr key={index}>
                                <td style={{border:"2px solid lightpink"}}>{i.id}</td>
                                <td style={{border:"2px solid lightpink"}}>{i.name}</td>
                                <td style={{border:"2px solid lightpink"}}>{i.status}</td>
                                <td style={{border:"2px solid lightpink"}}>{i.species}</td>
                                <td style={{border:"2px solid lightpink"}}>{i.gender}</td>
                                <td style={{border:"2px solid lightpink"}}>
                                    <img src={i.image} alt={i.name}width="100"/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
         <div className="in-box">
                {/* <h1 style={{backgroundColor:"lightpink", color:"lightcyan", textAlign:"center", fontSize:"30px", fontWeight:"400"}}>---RICK & MORTY API CALLING---</h1> */}
                <h3 style={{backgroundColor:"lightpink", color:"purple", width:"250px", height:"40px", textAlign:"center", margin:"10px"}}>Location-Data</h3>
                <table border={1} style={{border:"3px solid purple"}}>
                    <thead style={{border:"2px solid lightpink"}}>
                        <tr>
                            <th style={{border:"2px solid lightpink"}}>ID</th>
                            <th style={{border:"2px solid lightpink"}}>NAME</th>
                            <th style={{border:"2px solid lightpink"}}>TYPE</th>
                            <th style={{border:"2px solid lightpink"}}>DIMENSION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            location.map((i, index) =>(
                                <tr key={index}>
                                    <td style={{border:"2px solid lightpink"}}>{i.id}</td>
                                    <td style={{border:"2px solid lightpink"}}>{i.name}</td>
                                    <td style={{border:"2px solid lightpink"}}>{i.type}</td>
                                    <td style={{border:"2px solid lightpink"}}>{i.dimension}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="in-box">
                {/* <h1 style={{backgroundColor:"lightpink", color:"lightcyan", textAlign:"center", fontSize:"30px", fontWeight:"400"}}>---RICK & MORTY API CALLING---</h1> */}
                <h3 style={{backgroundColor:"lightpink", color:"purple", width:"250px", height:"40px", textAlign:"center", margin:"10px"}}>Episode-Data</h3>
                <table border={1} style={{border:"3px solid purple"}}>
                        <thead style={{border:"2px solid lightpink"}}>
                            <tr>
                                <th style={{border:"2px solid lightpink"}}>ID</th>
                                <th style={{border:"2px solid lightpink"}}>NAME</th>
                                <th style={{border:"2px solid lightpink"}}>AIR_DATE</th>
                                <th style={{border:"2px solid lightpink"}}>EPISODE</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                episode.map((i, index) =>(
                                    <tr key={index}>
                                        <td style={{border:"2px solid lightpink"}}>{i.id}</td>
                                        <td style={{border:"2px solid lightpink"}}>{i.name}</td>
                                        <td style={{border:"2px solid lightpink"}}>{i.air_date}</td>
                                        <td style={{border:"2px solid lightpink"}}>{i.episode}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                </table>
            </div>
    </div>
  )
}

export default RickMortyApiCalling