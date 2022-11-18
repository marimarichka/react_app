import React from "react";
import s from "../Preloader/Preloader.module.css";
import preloader from "../../img/loading-58.gif";

export default function Preloader() {
  return <div className={s.preloader}><img src={preloader} alt={'preloader'} /></div>
}