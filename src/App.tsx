import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from "./layout/header.tsx";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Outlet} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {


    return (
        <>
            <Header></Header>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                marginTop="1cm"
            >
                <Container maxWidth="lg">
                    <Typography variant="h4" component="h1" gutterBottom>
                        <Outlet/>
                    </Typography>
                </Container>
            </Box>
            <Copyright/>
        </>
    );
}
