import React, { useState } from "react";

const Studentresult = () => {
  const [name, setName] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [gujarati, setGujarati] = useState("");
  const [socialscience, setSocialscience] = useState("");
  const [hindi, setHindi] = useState("");
  const [computer, setComputer] = useState("");
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState("");
  const [list, setList] = useState([]);
   const [editId , setEditId] = useState(null)

  const handleSubmit = () => {
    
    const total =
        Number(maths) +
        Number(science) +
        Number(english) +
        Number(gujarati) +
        Number(socialscience) +
        Number(hindi) +
        Number(computer);
        setTotal(total)

        let All ="";
        if(
          Number (maths) >=35 && 
          Number (science) >=35 && 
          Number (english) >=35 && 
          Number (gujarati) >=35 && 
          Number (socialscience) >=35 && 
          Number (hindi) >=35 && 
          Number (computer) >=35)
        {
            All ="PASS";
        }
        else
        {
            All ="FAIL";
        }

    const obj = { name, maths, science, english, gujarati, socialscience, hindi, computer, total, result: All};

        if(editId != null)
        {
            let copyData = [...list]
            copyData[editId] = obj
            setList(copyData)
            setEditId(null)
        }
        else
        {
            setList([...list , obj])
        }

        setName('')
        setMaths('')
        setScience('')
        setEnglish('')
        setGujarati('')
        setSocialscience('')
        setHindi('')
        setComputer('')
    }

    const deleteData = (index) => {
        let copyData = [...list]
        copyData.splice(index , 1)
        setList(copyData)

    }
      const updateData = (item , index) => {
        setName(item.name)   
        setMaths(item.maths)
        setScience(item.science)
        setEnglish(item.english)
        setGujarati(item.gujarati)
        setSocialscience(item.socialscience)
        setHindi(item.hindi)
        setComputer(item.computer)
        
        setEditId(index)
    }

            // setList([...list, obj]);

            // setName("");
            // setMaths("");
            // setScience("");
            // setEnglish("");
            // setGujarati("");
            // setSocialscience("");
            // setHindi("");
            // setComputer("");
  

  return (
    <>
      <div>
        <h1>Student Result</h1>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter Name"
        />
        <br></br><br></br>

        <input
          type="number"
          onChange={(e) => setMaths(e.target.value)}
          value={maths}
          placeholder="Enter Maths Marks"
        />
        <br></br><br></br>

        <input
          type="number"
          onChange={(e) => setScience(e.target.value)}
          value={science}
          placeholder="Enter Science Marks"
        />
        <br></br><br></br>

        {/* redux24 */}

        <input 
          type="number"
          onChange={(e) => setEnglish(e.target.value)}
          value={english}
          placeholder="Enter English Marks"
        />
        <br></br><br></br>

        <input
          type="number"
          onChange={(e) => setGujarati(e.target.value)}
          value={gujarati}
          placeholder="Enter Gujarati Makrs"
        />
        <br></br><br></br>

        <input
          type="number"
          onChange={(e) => setSocialscience(e.target.value)}
          value={socialscience}
          placeholder="Enter Socialscience Marks"
        />
        <br></br><br></br>

        <input
          type="number"
          onChange={(e) => setHindi(e.target.value)}
          value={hindi}
          placeholder="Enter Hindi Marks"
        />
        <br></br><br></br>

        <input
          type="number"
          onChange={(e) => setComputer(e.target.value)}
          value={computer}
          placeholder="Enter Computer Marks "
        />
        <br></br><br></br>

        <button onClick={handleSubmit}>Submit</button>
        <br></br><br></br>

        <table style={{border:"1px solid black"}}>
          <thead style={{border:"1px solid black"}}>
            <tr>
              <td style={{border:"1px solid black"}}>Name</td>
              <td style={{border:"1px solid black"}}>Maths</td>
              <td style={{border:"1px solid black"}}>Science</td>
              <td style={{border:"1px solid black"}}>English</td>
              <td style={{border:"1px solid black"}}>Gujarati</td>
              <td style={{border:"1px solid black"}}>Socialscience</td>
              <td style={{border:"1px solid black"}}>Hindi</td>
              <td style={{border:"1px solid black"}}>Computer</td>
              <td style={{border:"1px solid black"}}>Total</td>
              <td style={{border:"1px solid black"}}>Result</td>
              <td style={{border:"1px solid black"}}>UPDATE</td>
              <td style={{border:"1px solid black"}}>DELETE</td>
            </tr>
          </thead>

          <tbody>
            {list.map((i, index) => (
              <tr key={index}>
                <td style={{border:"1px solid black"}}>{i.name}</td>
                <td style={{border:"1px solid black"}}>{i.maths}</td>
                <td style={{border:"1px solid black"}}>{i.science}</td>
                <td style={{border:"1px solid black"}}>{i.english}</td>
                <td style={{border:"1px solid black"}}>{i.gujarati}</td>
                <td style={{border:"1px solid black"}}>{i.socialscience}</td>
                <td style={{border:"1px solid black"}}>{i.hindi}</td>
                <td style={{border:"1px solid black"}}>{i.computer }</td>
                <td style={{border:"1px solid black"}}>{i.total}</td>
                <td style={{border:"1px solid black"}}>{i.result }</td>
                <td style={{border:"1px solid black"}}>
                    <button onClick={() => updateData(index)}>UPDATE</button>
                </td>
                <td style={{border:"1px solid black"}}>
                    <button onClick={() => deleteData(i, index)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Studentresult;   