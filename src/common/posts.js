import React from 'react';
import {Button,Grid,Container} from '@material-ui/core/';


const Posts=(props)=>{
    const {posts} = props;
    //const classes = useStyles();
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;


    return(
        <React.Fragment>
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {posts.data.map((post) => {
                    return (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={post.id} xs={12} md={4}>
                             <div className="card " >
                                <img className="card-img-top" src={post.img} alt="Card image cap"/>
                                <div className="card-body">
                                     <h5 className="card-title">{post.courseTitle}</h5>
                                     <p className="card-text">{post.funding}</p>
                                <Button className="btn btn-course" onClick={e=>{
                                         window.location.href="/single?id="+post.courseTitle
                                    }}>
                                    View Course 
                                </Button>
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