import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import routes from "../routes";
import AuthContext from "../context/auth/authContext";
import { Icon } from "antd";



import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const switchRoutes = (
  <Switch>
    {routes.map((props, key) => {
      if (props.page === "/admin") {
        return (
          <Route
            path={props.page + props.path}
            component={props.component}
            key={key}
          />
        );
      }
      return null;
    })}

    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar
}));
const Admin = props => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {user ? (
        <>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" style={{position:"relative",zIndex:"5000"}}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title} style={{color:"white"}}>
            ToyStory
          </Typography>
          
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                style={{top:"50px"}}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbar} />
              <List>
                {routes.map((text, index) => (
                    text.show ? ( <Link to={`/admin${text.path}`} style={{color:"black"}}>
                    <ListItem button key={text.name}>
                      <Icon
                        type={text.icon}
                        style={{ fontSize: "16px", marginRight: "15px" }}
                        theme="outlined"
                      />
                      <ListItemText primary={text.name} />
                    </ListItem>
                    </Link>):null
                ))}
              </List>
            </Drawer>
           
          </div>
          {switchRoutes}
        </>
      ) : (
        props.history.push("/login")
      )}
    </div>
  );
};

export default Admin;
