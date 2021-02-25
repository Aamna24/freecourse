import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DetailedCourse from './DetailedCourse'

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: "20px"
    },
	cardMedia: {
		paddingTop: '80%', // 16:9
        
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
    postPrice: {
        textAlign: "right",
        color: "orange",
        fontWeight: "bold"
    }
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
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="h2"
                                        className={classes.postTitle}
                                    >
                                        {post.courseTitle}
                                    </Typography>
                                    <div className={classes.postText}>
                                        <Typography
                                            component="p"
                                            color="textPrimary"
                                        ></Typography>
                                        <Typography variant="p" >
                                            {}
                                        </Typography>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                        <div class="card-image-block">
                                            <img src="https://randomuser.me/api/portraits/men/64.jpg" alt="profile-image" class="profile"/>
                    
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                    <div className={classes.postText}>
                                        <Typography
                                            component="p"
                                            color="textPrimary"
                                           id="funding"
                                        ></Typography>
                                        <Typography variant="p" >
                                            
                                            {post.funding}
                                        </Typography>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div className={classes.postPrice}>
                                        <Typography
                                            component="p"
                                            color="textPrimary"
                                        ></Typography>
                                        <Typography variant="p" >
                                            {post.coursePrice}
                                        </Typography>
                                    </div>
                                    </div>
                                    </div>
                                </CardContent>
                                <Button className="btn btn-course" onClick={
                                     e=>{

                                        window.location.href="/single?id="+post.courseTitle
                                    }
                                } >
                                    View Course </Button>
                            </Card>
                          
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    </React.Fragment>
    )
}

export default Posts;