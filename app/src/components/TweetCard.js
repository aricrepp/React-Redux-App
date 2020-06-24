import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 545,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  }));

const TweetCard = props => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Trump" src="https://pbs.twimg.com/profile_images/736392853992001537/eF4LJLkn_400x400.jpg" />
                }
            />
        </Card>
    );

}

export default TweetCard;