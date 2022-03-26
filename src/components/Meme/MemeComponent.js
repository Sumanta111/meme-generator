import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
    root: {
        display:'flex',
        height:500,
        justifyContent:'space-between'
    },
    container:{
        display:'flex',
        flexDirection:'column'
    },
    image:{
        height:'100%',
        position:'relative'
    },
    upperText:{
    left: '30%',
    padding: 0,
    position: 'absolute',
    top: '-1%',
    zIndex: 99999,
    background: 'white',
    fontSize: 30,
    },
    lowerText:{
        left: '30%',
        padding: 0,
        position: 'absolute',
        bottom: '5%',
        zIndex: 99999,
        background: 'white',
        fontSize: 30,
        }
  });

const MemeComponent = (props) => {
    const classes = useStyles();
    const [upperText, setUpperText] = useState('');
    const [lowerText, setLowerText] = useState('');
    const { selectedMeme } = props;
    const customizeMeme = () => {
        console.log(upperText,lowerText)
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <TextField id="outlined-basic" label="Upper Text" variant="outlined" value={upperText} onChange={(e) => setUpperText(e.target.value)} />
                <TextField id="outlined-basic" label="Lower Text" variant="outlined" value={lowerText} onChange={(e) => setLowerText(e.target.value)} />
                <Button variant="contained" onClick={customizeMeme}>Customize</Button>
            </div>
            <div style={{position:'relative'}}>
                <p className={classes.upperText}>{upperText}</p>
                <img src={selectedMeme.url} className={classes.image} />
                <p className={classes.lowerText}>{lowerText}</p>
            </div>
        </div>
    );
};

export default MemeComponent;