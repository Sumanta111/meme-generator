import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 200,
      padding: '0 30px',
      display:'flex',
      alignItems:'center',
      flexDirection:'column'
    },
    image:{
        height:70
    }
  });

const HeaderComponent = (props) => {
    const classes = useStyles();
    const generateMeme = () => {
        const {allMeme,setRandomSelectedMeme} = props;
        const { memes } = allMeme;
        const random = Math.floor(Math.random() * memes.length);
        setRandomSelectedMeme(memes[random]);
    }
    return (
        <header className={classes.root}>
            <div>
                Welcome to meme Generator
            </div>
            <img
                src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
                alt='Problem?'
                className={classes.image}
            />
            <p>Meme Generator</p>
            <div>
                <Button variant="contained" onClick={generateMeme}>Generate Meme</Button>
            </div>
        </header>
    );
};

export default HeaderComponent;