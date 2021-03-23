import React, { useState , useEffect} from 'react';
import ListGroup from './listGroup'
import Pagination from './pagination'
import {paginate} from './paginate'
import axios from 'axios'
import _ from 'lodash'
const Formdata=(props)=>{
    const {posts} = props;
    const [currentPage,setcurrentPage]=useState(1);
    const PageSize = 10;
    //added search
    const [search,setSearch]=useState();
    //-------------------
    
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;
  
      //var filtered = city && city!=="All"? posts.data.filter(m => m.city === city): posts.data;
   
     //const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order])
     console.log(search)
     const forms = paginate(posts, currentPage , PageSize);
    
    
    
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
    

const onchange=(e)=>{
  setSearch(e.target.value)
  
}
    return(
     
       
      
      <div className="  row">
        
         <input label="Search" icon="search" onChange={onchange}/>
      <br />
         
      <div className="col-2">
      <h5>Filter by City:</h5>
      
    
    
    </div>
            
            
            <div className="col">
            
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th >City</th>
                        <th>Course Title</th>
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
    



         </div>
        
    )
}

export default Formdata;