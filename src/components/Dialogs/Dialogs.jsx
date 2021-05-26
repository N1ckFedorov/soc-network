import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Dimych
        </div>
        <div className={s.dialog}>
          Anrey
        </div>
        <div className={s.dialog}>
          Nick
        </div>
        <div className={s.dialog}>
          Roman
        </div>
        <div className={s.dialog}>
          Sasha
        </div>
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