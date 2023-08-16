import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const customizedTheme = createTheme({
    palette: {
        background: {
            default: '#2B2B2A', // Replace with the grey shade you prefer
        },
    },
});


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {
    const [username,setusername]=React.useState("")
    const [pwd,setpwd]=React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({username,pwd})
        axios.post("http://localhost:5000/api/login",{email:username,password:pwd}).then((result)=>{

            console.log(result.data,"the response");
            if(result.data==="success"){
                props.chanV("AdminHome")
                props.setlogged(true)                  
            }else{
                alert(result.data)
            }
      
        })
    }

    return (
        <ThemeProvider theme={customizedTheme}>
            <Container component="main" maxWidth="xs">
                
                        
                    





               
                <CssBaseline />
                <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'grey', // Change this to the shade of grey you prefer
                padding: '20px', // Adding padding for better spacing
                borderRadius: '10px', // Adding border radius for a rounded appearance
              }}
                   
                > 
                

                      

                  


                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={(e)=>handleSubmit(e)} noValidate sx={{ mt: 1  }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            type="email"
                            onChange={(e)=>{setusername(e.target.value)}}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e)=>{setpwd(e.target.value)}}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, color: "black" }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>

                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}