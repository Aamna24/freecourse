import React from 'react';
import {Button,Grid,Container} from '@material-ui/core/';


const Posts=(props)=>{
    const {posts} = props;
    //const classes = useStyles();
    if(!posts || posts.length===0) return <p className='text-center'>Cannot find any posts</p>;


    return(
        <React.Fragment>
        <Container maxWidth="lg" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {posts.data.map((post) => {
                    return (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={post.id} xs={12} md={12}>
                             <div className="card " >
                                 <div className='row'>
                                     <div className='col-md-2 hidden-xs'>
                                     <img className="card-img-top" src={post.img} alt="Card image cap"/>

                                     </div>
                                     <div className='col-md-8 col-xs-12'>
                                     <div className="card-body">
                                     <h5 className="card-title">{post.courseTitle}

                                     
                                     </h5>

                                     <br/>
                                     <p className='desc'>{post.courseDescription}</p>
                                     <br/>
                                     <p className="card-text">{post.funding}</p>


                               
                                </div>
                                     </div>
                                     
                                     <div className='col cbutton'>
                                     <Button className="co-button" onClick={e=>{
                                         window.location.href="/single?id="+post.courseTitle
                                    }}>
                                    View Course 
                                </Button>
                                     </div>
                                 </div>
                               
                            </div>

                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    </React.Fragment>
    )
}

export default Posts;