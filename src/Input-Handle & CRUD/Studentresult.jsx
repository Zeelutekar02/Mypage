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
  const [total, setTotal] = useState("");
  const [result, setResult] = useState("");
  const [list, setList] = useState([]);
   const [editId , setEditId] = useState(null)

  const handleSubmit = () => {
    const obj = { name, maths, science, english, gujarati, socialscience, hindi, computer, total, result};

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

  const handleAdd = ()=>{
    const total =
        Number(maths) +
        Number(science) +
        Number(english) +
        Number(gujarati) +
        Number(socialscience) +
        Number(hindi) +
        Number(computer);

        const result =
        Number(maths) >=35 && Number(science) >=35 && Number(english) >=35 && Number(gujarati) >=35 && Number(socialscience) >=35 && Number(hindi) >=35 && Number(computer) >=35 ?"Pass" :"Fail";
}

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
        //   type="number"
          onChange={(e) => setMaths(e.target.value)}
          value={maths}
          placeholder="Enter Maths Marks"
        />
        <br></br><br></br>

        <input
        //   type="number"
          onChange={(e) => setScience(e.target.value)}
          value={science}
          placeholder="Enter Science Marks"
        />
        <br></br><br></br>

        <input
        //   type="number"
          onChange={(e) => setEnglish(e.target.value)}
          value={english}
          placeholder="Enter English Marks"
        />
        <br></br><br></br>

        <input
        //   type="number"
          onChange={(e) => setGujarati(e.target.value)}
          value={gujarati}
          placeholder="Enter Gujarati Makrs"
        />
        <br></br><br></br>

        <input
        //   type="number"
          onChange={(e) => setSocialscience(e.target.value)}
          value={socialscience}
          placeholder="Enter Socialscience Marks"
        />
        <br></br><br></br>

        <input
        //   type="number"
          onChange={(e) => setHindi(e.target.value)}
          value={hindi}
          placeholder="Enter Hindi Marks"
        />
        <br></br><br></br>

        <input
        //   type="number"
          onChange={(e) => setComputer(e.target.value)}
          value={computer}
          placeholder="Enter Computer Marks "
        />
        <br></br><br></br>

        <button onClick={handleSubmit}>Submit</button>  <br></br><br></br>

        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Maths</td>
              <td>Science</td>
              <td>English</td>
              <td>Gujarati</td>
              <td>Socialscience</td>
              <td>Hindi</td>
              <td>Computer</td>
              <td>Total</td>
              <td>Result</td>
              <td>UPDATE</td>
              <td>DELETE</td>
            </tr>
          </thead>

          <tbody>
            {list.map((i, index) => (
              <tr key={index}>
                <td>{i.name}</td>
                <td>{i.maths}</td>
                <td>{i.science}</td>
                <td>{i.english}</td>
                <td>{i.gujarat}</td>
                <td>{i.socialscience}</td>
                <td>{i.hindi}</td>
                <td>{i.computer }</td>
                <td>{i.totla }</td>
                <td>{i.result }</td>
                <td>
                    <button onClick={() => deleteData(index)}>DELETE</button>
                </td>
                <td>
                    <button onClick={() => updateData(i, index)}>UPDATE</button>
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