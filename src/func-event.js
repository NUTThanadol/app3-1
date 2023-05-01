import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCan =() =>{
        alert('Cancel')
        
    }

    let banner = './image/2.jpg'
    let url = 'http://2js.org'

    const bannerClick =() =>{
        window.open(url)
    }
    return(
        <div> 
        <img src={banner} onClick={bannerClick} style={{cursor:'pointer',width:'10%'}}/>
        <button onClick={onClickButtonOK}>OK</button>
        <button onClick={onClickButtonCan}>Cancel</button>
        </div>
       
    )
  
}