import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import List from "../components/List"

export default function Bots() {
    
    return (
        <>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="#fff"
                        gutterBottom
                    >
                        All IOTABOTS
                    </Typography>
                    {/* End hero unit */}
                    <List />

                </Container>
            </main>
        </>
    );
}