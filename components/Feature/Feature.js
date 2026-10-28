import React from 'react';
import MainFeature from './MainFeature';
import useStyles from './feature-style';

export default function Feature() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <MainFeature />
    </div>
  );
}