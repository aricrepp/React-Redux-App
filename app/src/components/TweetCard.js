import React, {useState, useEffect} from 'react';
import check from '../assets/check.png';
import loading from '../assets/poop.gif';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
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
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
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
            <CardActions className={classes.icons}>

        <IconButton aria-label="add to favorites">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton aria-label="replay">
          <ReplayIcon />
        </IconButton>
        <IconButton aria-label="heart">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="retweet">
          <PublishIcon />
        </IconButton>

      </CardActions>
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