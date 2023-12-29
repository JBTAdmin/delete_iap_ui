import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TableCrud from "./pages/specialHandlingUser.tsx";
import SpecialHandlingUser from "./pages/specialHandlingUser.tsx";
import SelectAllTransferList from "./pages/TransferList.tsx";
import AatCategory from "./pages/aatCategory.tsx";

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
        <Container maxWidth="xl">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <AatCategory></AatCategory>
                    <SpecialHandlingUser></SpecialHandlingUser>
                    <SelectAllTransferList></SelectAllTransferList>
                </Typography>
                <Copyright/>
            </Box>
        </Container>
    );
}
