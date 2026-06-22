import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Post = () => {
  
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)

  // useEffect(() =>{
  //   dataView()
  // },[])

  useEffect(() =>{
    dataView()
  },[count])

  function dataView()
  {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) =>{
        console.log(res.data)
        setList(res.data)
      })
      .catch((error) =>{
        console.log(error);
      })
  }
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLICk</button>
        <table border={1}>
            <thead>
                <tr>
                      <th>USERID</th>
                      <th>ID</th>
                      <th>TITLE</th>
                      <th>BODY</th>
                </tr>
              </thead>
                <tbody>
                    {
                        list.map((i , index) => (
                            <tr key={index}>
                                <td>{i.userId}</td>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            
        </table>
    </div>
  )
}

export default Post
