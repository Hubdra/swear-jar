import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {

  const classes = useStyles();

  return (

    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Swear Jar
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Swear Jar App</h1>
        <p>
          <Button variant="contained" color="primary">
            SWEAR TO ME!
          </Button>
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
