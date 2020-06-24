import React, {useState, useEffect} from 'react';
import check from '../assets/check.png';
import loading from '../assets/poop.gif';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {getQuote} from '../actions/actions';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '545px',
        height: 'auto',
        maxWidth: '545px',
    },
    titleCon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleImg: {
        width: '16px',
        paddingLeft: '10px',
    },
    titleP: {
        margin: '0',
    },
    titleName: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleP2: {
        margin: '0',
        color: 'darkgrey'
    },
    loading: {
        width: '48px',
    },
    quoteCon: {
        padding: '20px',
    }
    
  }));

const TweetCard = ({getQuote, quote, isFetching, error }) => {
    const classes = useStyles();

    useEffect(() => {
        getQuote();
      }, [getQuote]);

    if(isFetching){
        return (
            <Card className={classes.root}>
                <img className={classes.loading} src={loading}></img>
            </Card>
        );
    } 
    
    return (
        <>
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Trump" src="https://pbs.twimg.com/profile_images/736392853992001537/eF4LJLkn_400x400.jpg" />
                }
                title={
                <div className={classes.titleCon}>
                    <div className={classes.titleName}>
                        <p className={classes.titleP}>Donald J. Trump</p>
                        <img alt="check" className={classes.titleImg} src={check} />
                    </div>
                    <div>
                        <p className={classes.titleP2}>@ProfessionalMoron</p>
                    </div>
                </div>}
            />
            <CardContent>
                <Typography className={classes.quoteCon} variant="body2" color="textSecondary" component="p">
                {quote}
                </Typography>
            </CardContent>
        </Card>
        <button onClick={getQuote}>Get Quote!</button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect(mapStateToProps, {getQuote})(TweetCard);