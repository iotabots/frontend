
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';

export default function Album() {

    return (
        <AppBar position="relative">
            <Toolbar>
                <Link href="/" color="inherit">
                    {'IOTABOTS'}
                </Link>
                |
                <Link href="/" color="inherit">
                    {'Home'}
                </Link>
                |
                <Link href="/bots" color="inherit">
                    {'Bots'}
                </Link>
            </Toolbar>
        </AppBar>
    )
}

