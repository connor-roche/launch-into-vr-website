import React from 'react';

import classes from './DownloadsContent.css';
import Aux from '../../hoc/Aux/Aux';

const DownloadsContent = () => (

    <Aux>
      <section className={[classes.content, "container"].join(' ')}>
	<h1>Downloads</h1>
	<p className={classes.downloadsDesc}>Download the Unity Package to get all game files and be able to edit the game or the APK to play the game.</p>
	<h3 className={classes.subTitle}>Unity Package</h3>
	<p>Get the Unity Package in order to modify and build Launch yourself. Feel free to use any assets, scenes, and functionality that comes in the package. Refer to the documentation to get an overview of Launch, what functionality exists in assets or scrips, and how to use it.</p>
	<a href="https://firebasestorage.googleapis.com/v0/b/njit-vr-c62b1.appspot.com/o/LaunchIntoVr.unitypackage?alt=media&token=04336a64-5760-4501-97dc-4586e5f910af" className="btn btn-outline-secondary">Download Unity Package</a>
	<h3 className={classes.subTitle}>APK</h3>
	<p>Launch is made for Samsung Android phones that are compatible with Samsung Gear VR headsets. This is the APK that can be put directly on an appropriate device in order to immediately play the current version of Launch. Be sure to have your phone set up to allow the installation of apps from sources other than the Play Store (under Security settings).</p>
	<a href="https://firebasestorage.googleapis.com/v0/b/njit-vr-c62b1.appspot.com/o/LaunchIntoVR.apk?alt=media&token=d4ad065f-7e5c-4c74-88b8-1c43778cb3e2" className="btn btn-outline-secondary">Download APK</a>
      </section>
    </Aux>

);

export default DownloadsContent;
