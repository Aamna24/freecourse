import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import {apiEndpoint} from '../config.json'
import Pagination from './pagination'
import download from 'js-file-download';
import axios from 'axios'
const Formdata=(props)=>{
    const {posts} = props;
   const [currentPage,setcurrentPage]=useState(1);
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;


    const handleChange=(e)=>{
       const apiUrl = "https://consulting-backend.herokuapp.com/form/print/"+e;
       console.log(apiUrl)
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
    const apiUrl = "https://consulting-backend.herokuapp.com/form/watermark/"+e;
    console.log(apiUrl)
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
     const handleDownload=(e)=>{
        const apiUrl ="https://consulting-backend.herokuapp.com/form/getFiles";
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
     
     

 const handlePageChange=page=>{
     
    setcurrentPage(page)
    
 }
    return(
        <React.Fragment>
        <Container maxWidth="md" component="main">
            
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>City</th>
                                    <th>Course Title</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {posts.data.map((post)=>{
                                return(
<tr>
   
                                    <td>{post.firstName}</td>
                                    <td>{post.city}</td>
                                    <td>{post.appliedCourse}</td>
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
    </React.Fragment>
    )
}

export default Formdata;