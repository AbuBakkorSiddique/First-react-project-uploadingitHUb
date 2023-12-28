import React from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Userdata() {

 // State to store the data from the API
 const [data, setData] = useState(null);
  
 useEffect(() => {
   // Function to fetch data from the API
   const fetchData = async () => {
     try {
       // Make a GET request to your API endpoint
       const response = await axios.get('https://jsonplaceholder.typicode.com/users');

       // Set the data in the state
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

   // Call the fetchData function
   fetchData();
 }, []); 





  return (
<> 

<div>


<div>
      {/* Render your component using the data */}
      {data && (
        <ul>
          {data.map(item => (


            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>
              {item.Text}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>


          ))}
        </ul>
      )}
    </div>









</div>







</>
  )
}

export default Userdata ; 