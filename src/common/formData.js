import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import {apiEndpoint} from '../config.json'
import Pagination from './pagination'
import {paginate} from './paginate'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'

const Formdata=(props)=>{
    const {posts} = props;
    
   const [currentPage,setcurrentPage]=useState(1);
   const PageSize = 4;
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;

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
    

 const handlePageChange=page=>{
     
    setcurrentPage(page)
    
 }
 const handleClick=(e)=>{
   console.log(e)
 }
 
    return(
        <div className="row">
          <div className="col">
          <Container maxWidth="md" component="main">
            <p>Total Forms: {posts.data.length} </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>City</th>
                        <th>Course Title</th>
                        <th>Date</th>
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
                        <td><button className="btn btn-success btn-sm" onClick={
                          ()=>{handleChange(post._id)}
                        }>Fill PDF</button>
                            
                        </td>
                        <td><button className="btn btn-warning btn-sm" onClick={
                          ()=>{handleSignChange(post._id)}
                        }>Sign PDF</button>
                            
                        </td>
                        
                        
                    </tr>
                    )
                })}
                    
                
                </tbody>
            </table>

        
    

</Container>
<Pagination 
itemsCount={posts.data.length} 
pageSize={4}
onPageChange={handlePageChange}
currentPage={currentPage}/>
          </div>
        
    </div>
    )
}

export default Formdata;