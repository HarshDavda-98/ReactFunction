import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PointOfSaleSharpIcon from '@mui/icons-material/PointOfSaleSharp';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MailIcon from '@mui/icons-material/Mail';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import PaymentIcon from '@mui/icons-material/Payment';
import PanToolTwoTone from '@mui/icons-material/PanToolTwoTone';
import Routers from './Routers';
import { useParams, Link } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
  const theme = useTheme();
  const params = useParams();
  console.log(params)
  const sideNav = [
    "Google Map Intergration",
    "Signature canvas functionality",
    "Email functionality",
    "Payment Gateway integration",
    "Download",
    "Upi Integration",
    "DragDrop"
  ]
  const sideNavIcon = [<LocationOnIcon />, <BorderColorIcon />, <MailIcon />, <PaymentIcon />, <DownloadForOfflineIcon />, <PointOfSaleSharpIcon />, <PanToolTwoTone />];
  const pageLink = ["/overview", "/googlemap", "/signature-canvas", "/Email-functionality", "/payment-integration", "/downloadfiles", "/upi-integration", "/drag-and-drop"];
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My Functionality Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <div style={{ marginRight: "27%" }}>Overviews</div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideNav?.map((text, index) => (

            <Link to={pageLink[index + 1]} style={{textDecoration:"none"}}>
              <ListItem key={text} disablePadding>
                <ListItemButton className='Selected'>
                  <ListItemIcon>
                    {sideNavIcon[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>

          ))}
        </List>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          <Routers />
        </Typography>
      </Main>
    </Box>
  );
}