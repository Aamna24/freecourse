import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Button, CardContent,Grid,Typography,Container, CardMedia} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: "20px"
    },
	cardMedia: {
		paddingTop: "60%",
        marginTop: "20px",
       
        
    },
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:"",
        borderColor: "black"
			
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'center',
        fontWeight: 'bold',
        textWrap: "no-wrap"
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
        color: "black",
        
	},
    
}));



const Posts=(props)=>{
    const {posts} = props;
    const classes = useStyles();
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;


    return(
        <React.Fragment>
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {posts.data.map((post) => {
                    return (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={post.id} xs={12} md={4}>
                             <div class="card" style={{"width": "18rem"}}>
                                <img class="card-img-top" src={post.img} alt="Card image cap"/>
                                <div class="card-body">
                                     <h5 class="card-title">{post.courseTitle}</h5>
                                     <p class="card-text">{post.funding}</p>
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