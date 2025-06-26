import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxCloud() {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.parallaxWrap, classes.dotsWrap)}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.large)}>
          <div className={classes.cloudWrap}>
            <Parallax
              translateY={[10, 70]}
              className={cx(classes.left, classes.big, 'figure')}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              translateY={[20, 70]}
              className={cx(classes.left, classes.small, 'figure')}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
          </div>
          <div className={classes.cloudWrap}>
            <Parallax
              translateY={[20, 90]}
              className={cx(classes.right, classes.big, 'figure')}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              translateY={[20, 60]}
              className={cx(classes.right, classes.small, 'figure')}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
          </div>
          <div className={classes.cloudWrap}>
            <Parallax
              translateY={[10, 80]}
              className={cx(classes.left, classes.big, 'figure')}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              translateY={[-10, 80]}
              className={cx(classes.left, classes.small, 'figure')}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
