import React from 'react'

function DataSection() {

const DataCard=[
    {
        id:"1",
        CardNumber:"1M+",
        CardName:"community members"
    },
    {
        id:"2",
        CardNumber:"150+",
        CardName:"community groups"
    },
    {
        id:"3",
        CardNumber:"50+",
        CardName:"countries represented"
    },

]

  return (
    <>
    <div className="datasection">
        <div className="Heading-data">
{DataCard.map((item)=>{
    return(
        <div key={item.id} className="data-card">
            <p style={{fontSize:"35px",marginTop:"-2px",fontWeight:"bolder",color:"blue"}}>{item.CardNumber}</p>
            <p style={{marginTop:"-20px"}}>{item.CardName}</p>
        </div>
    )
   
})}
 </div>
    </div>
    <div className="DataCard" style={{marginTop:"20px"}}>
        <div className="Cards-proj">
        <div className="card_1" style={{height:"400px",padding:"20px"}}>
       
          <p>
            <b>An Always On-Support Network.</b>
          </p>
          <p>
          Swap setups and share tips in over 149 online communities.
          </p>
          <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png' alt="image-1" style={{width:"300px"}}></img>
        </div>
        <div className="card_1" style={{height:"400px",padding:"20px"}}>
       
       <p>
         <b>Choose Your Language.</b>
       </p>
       <p>
       Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!
       </p>
       <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png' alt="image-1" style={{width:"400px",marginLeft:"19px",marginTop:"80px"}}></img>
     </div>
        </div>
        
    </div>
    </>
  )
}

export default DataSection