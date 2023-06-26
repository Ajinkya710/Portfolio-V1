import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Resume from '../../assests/Ajinkya_Resume.pdf'
import './Navbar.css';

const pages = [
    {
        "id": '01',
        "name": 'About',
        link: '#about'
    },
    {
        "id": '02',
        "name": 'Experience',
        link: '#experience'
    },
    {
        "id": '03',
        "name": 'Projects',
        link: '#projects'
    },
    {
        "id": '04',
        "name": 'Contact',
        link: '#connect'
    },
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: `var(--navy)` }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href='#home' className='navbar_links'>
                        <Box sx={{ flexGrow: 0, display: 'flex' }}>
                            <IconButton>
                                <Avatar variant="rounded" src="../../assests/Me.jpg" />
                            </IconButton>
                            <p style={{ color: 'var(--lightest-slate)', fontFamily: 'var(--font-mono)', fontWeight: '900', fontSize: '22px' }}>AJINKYA BUVA</p>
                        </Box>
                    </a>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none'}
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <a style={{textDecoration:'none'}} href={page.link} >
                                        <Typography textAlign="center" sx={{ color: 'var(--lightest-slate)' }}><span className='typography'>{page.id + ". "}</span><span>{page.name}</span> </Typography>
                                    </a>
                                </MenuItem>
                            ))}
                            <Button>
                                <a className='resume_link resume_link_appbar' href={Resume} target="_blank" rel="noreferrer" >Resume</a>
                            </Button>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                        {pages.map((page) => (
                            <a href={page.link} className='navbar_links' >
                                <Button
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 3, fontFamily: 'var(--font-mono)', color: `var(--lightest-slate)`, display: 'block', textTransform: 'none' }}
                                >
                                    <span className='typography'>{page.id + ". "}</span><span>{page.name}</span>
                                </Button>
                            </a>
                        ))}
                        <Button >
                            <a className='resume_link' href={Resume} target="_blank" rel="noreferrer" >Resume</a>
                        </Button>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;