import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <NavLink to='/dialogs/1' className={s.dialog + ' ' + s.active}>
          Dimych
        </NavLink>
        <NavLink to='/dialogs/2' className={s.dialog}>
          Anrey
        </NavLink>
        <NavLink to='/dialogs/3' className={s.dialog}>
          Nick
        </NavLink>
        <NavLink to='/dialogs/4' className={s.dialog}>
          Roman
        </NavLink>
        <NavLink to='/dialogs/5' className={s.dialog}>
          Sasha
        </NavLink>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          hi
        </div>
        <div className={s.message}>
          test message
        </div>
        <div className={s.message}>
          shit
        </div>
      </div>
    </div>
  )
}

export default Dialogs