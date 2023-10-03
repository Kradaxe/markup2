import React from 'react'
import {Searchtab} from "../searchtab/Searchtab";
import "./workspace.scss"

export const Workspace = () => {
  return (
    <div className='workspace'>

      <div className='searchtab'><Searchtab/></div>

      <div className='mainsection'>Comment on this</div>
      
    </div>
    
  )
}
