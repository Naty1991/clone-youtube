import React from 'react'
import './sidebar.css'
import Iconos from '../Iconos/iconos'
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ExploreIcon from '@material-ui/icons/Explore';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const sidebar = () => {
    return (
        <div className="sidebar">
          <Iconos selected Icon={HomeIcon} title="Inicio"/>
          <Iconos  Icon={ExploreIcon} title="Explorar"/>
          <Iconos  Icon={SubscriptionsIcon} title="Suscripciones"/>
          <Iconos  Icon={VideoLibraryIcon} title="Biblioteca"/>
          <hr className="separator"></hr>
          <Iconos  Icon={HistoryIcon} title="Historial"/>
          <Iconos  Icon={WatchLaterIcon} title="Ver más tarde"/>
          <Iconos  Icon={ThumbUpAltIcon} title="Videos que me gustan"/>



        </div>
    )
}

export default sidebar;
