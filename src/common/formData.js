import React, { useState , useEffect} from 'react';
import ListGroup from './listGroup'
import Pagination from './pagination'
import {paginate} from './paginate'
import axios from 'axios'
import _ from 'lodash'
const Formdata=(props)=>{
    const {posts} = props;
    const cities= ["All","London","Lahore"]
    const [city, setCurrentCity]= useState(cities)
    const [s_date, setDate] = useState()
    const [currentPage,setcurrentPage]=useState(1);
    const PageSize = 10;
  const [sortColumn,setSortColumn] = useState({path: 'city', order:'asc'})
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;
  
      var filtered = city && city!=="All"? posts.data.filter(m => m.city === city): posts.data;
     
     const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
    
     const forms = paginate(sorted, currentPage , PageSize);
    
    
    
    const handleChange=(e)=>{
       const apiUrl =  "https://consulting-backend.herokuapp.com/form/print/"+e;
      
       axios(apiUrl, {
        method: "GET",
        responseType: "blob"
        //Force to receive data in a Blob Format
      })
        .then(response => {
          //Create a Blob from the PDF Stream
          const file = new Blob([response.data], {
            type: "application/pdf"
          });
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });    
 }

 const handleSignChange=(e)=>{
    const apiUrl = "https://consulting-backend.herokuapp.com/form/watermark/"+e
    axios(apiUrl, {
        method: "GET",
        responseType: "blob",
        mode: 'no-cors' 
        //Force to receive data in a Blob Format
      })
        .then(response => {
          //Create a Blob from the PDF Stream
          const file = new Blob([response.data], {
            type: "application/pdf"
          });
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
          window.open(fileURL);
        })
        .catch(error => {
          console.log(error);
        });
     }
    
    const handleCitySelect=city=>{
     setCurrentCity(city)
     
    }
    const handleDate=selectedDate=>{
      setDate(selectedDate.target.value)
     
     }

 const handlePageChange=page=>{
     
    setcurrentPage(page)
    
 }
 const handleSort = path=>{
   setSortColumn({path, order:'asc'})
 }
 
    return(
     
       
      
      <div className="  row">
         
         
      <div className="col-2">
      <h5>Filter by City:</h5>
      <ListGroup items={cities} onItemSelect={handleCitySelect} selectedItem={city} /><br/>
    
    
    </div>
            
            
            <div className="col">
            Showing {filtered.length} movies in database
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th  onClick={()=>handleSort('city')}>City</th>
                        <th onClick={()=>handleSort('title')}>Course Title</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {forms.map((post)=>{
                  
                    return(
<tr>

                        <td>{post.firstName}</td>
                        <td>{post.city}</td>
                        <td>{post.appliedCourse}</td>
                        <td>{post.date}</td>
                        <td><button className="btn btn-danger btn-sm" onClick={
                           e=>{
                            window.location.href="/show-data?id="+post._id}}>Show Data
                          </button></td>
                        <td><button className="btn btn-success btn-sm" onClick={
                          ()=>{handleChange(post._id)}
                        }>Fill PDF</button>
                            
                        </td>
                        
                        <td><button className="btn btn-warning btn-sm" onClick={
                          ()=>{handleSignChange(post._id)}
                        }>Sign PDF</button></td>
                        
                        <td>
                        <select
              name="wheelchair"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="[Please select one]">[Please select one]</option>
              <option value="Yes">College A</option>
              <option value="No">College B</option>
            </select>
                        </td>
                        
                    </tr>
                    )
                })}
                    
                
                </tbody>
            </table>

            </div>
    


<Pagination 
itemsCount={filtered.length} 
pageSize={10}
onPageChange={handlePageChange}
currentPage={currentPage}/>
         </div>
        
    )
}

export default Formdata;