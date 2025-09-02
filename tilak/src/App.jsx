import { useState, useEffect, useRef, use } from "react";

 

function App() {
  const BASE_URL = "https://dummyjson.com/users";
  const [data, setData] = useState([]);
  const [name , setName] = useState(null);

  useEffect(() => {
    console.log("usereffect rendered")
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/search?q=${name}`);
        const data = await response.json();
        setData(data.users);
        console.log("data fetched");
      } catch (error) {
        console.log("ERROR:", error);
      }
    }
  fetchData()
  },[name])

  const inputRef = useRef(null);
  console.log(inputRef.current);
  const handleonchange = (text) => {
     setName(text)
  };
  console.log( "type :" ,typeof data.users , data.users)

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="  bg-gray-100 border-2 border-black  h-40 w-3xl my-50 p-5 rounded-2xl">
          <input
            onChange={(e) => {
              handleonchange(e.target.value);
            }}
            ref={inputRef}
            className=" w-full p-3"
            type="text"
            placeholder="Search for a user..."
            name="user"
            id="user"

          />
           <div>
            <select name="user" id="user">
              {data.map((user,index)=>
              (<option key={user.id} value={user.id}>{user.firstName}</option>)
            )}
            </select>
           </div>
           
        </div>
      </div>
    </>
  );
}

export default App;
