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



const Formdata=(props)=>{
    const {posts} = props;
    const classes = useStyles();
    if(!posts || posts.length===0) return <p>Cannot find any posts</p>;


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
                                    <td><button className="btn btn-success btn-sm">Fill PDF</button>
                                        
                                    </td>
                                </tr>
                                )
                            })}
                                
                            
                            </tbody>
                        </table>

                    
                

        </Container>
    </React.Fragment>
    )
}

export default Formdata;