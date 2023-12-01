import React from 'react'
import AIicon from '../Media/AI.png'
import Bookicon from '../Media/book.png';
import Targeticon from '../Media/target.png';
import Documenticon from '../Media/docs.png';
function Card() {

const CardData = [
    {
        id:"1",
        CardName:"AI",
        CardIcon:AIicon,
        CardDesc:"Ask literally anything . Notion will answer."
    },
    {
        id:"2",
        CardName:"Wikis",
        CardIcon:Bookicon,
        CardDesc:"Centralize your answers.No more hunting for answers."
    },
    {
        id:"3",
        CardName:"Projects",
        CardIcon:Targeticon,
        CardDesc:"Manage complex projects without chaos."
    },
    {
        id:"4",
        CardName:"Docs",
        CardIcon:Documenticon,
        CardDesc:"Simple,Powerful,beautiful.Next-gen notes and Docs."
    },
]
  return (
    <>
    <div className="Card-Section">
    {CardData.map((item)=>{
        return(
           <div key={item.id} className="Card">
           <div className="heading-card"> <img src={item.CardIcon} alt="icon"  style={{width:"30px",height:"30px",marginLeft:"20px"}}/>
            <h2 style={{marginLeft:"20px"}}>{item.CardName}</h2>
            </div>
            <p style={{marginLeft:"20px",marginTop:"-10px"}}>{item.CardDesc}</p>
           </div>
        )
    })}

    </div>
    </>
  )
}

export default Card;