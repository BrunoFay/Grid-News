import React, { useRef, useEffect } from 'react';
import useFetch from '../services/api';
export default function GridTemplate() {
  
  
const div1 = useRef(null)
const div2 = useRef() 
const div3 = useRef() 
const div4 = useRef() 
const div5 = useRef() 
const div6 = useRef() 
const div7 = useRef() 
const div8 = useRef() 
const divs = new Array(div1,div2,div3,div4,div5,div6,div7,div8)
const { data } = useFetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=35af0917ca67481a91caf6dd75a8caeb')

function randomPositionCard() {
  let x = new Array(9)
  for(let i=1; i<9; i++) {
    x[i] = i; 
  }  
  x.sort((a,b)=> (Math.round(Math.random())-0.5)).pop()
 return x
}
function setCardsToScreen() {
    const arrayRandom = randomPositionCard()
   divs.forEach((item,index)=> item.current.className =`div${arrayRandom[index]}` )  
}
function setTimeChangeCards() {
  
  setInterval(()=>{
    setCardsToScreen()
    
    },5000) 
  
}
function creatNewCard(noticePosition){
  return data && data.articles.map((notice, index) => index === noticePosition && (
    <div> 
    <span>{notice.title}</span>
    <img src={`${notice.urlToImage}`} />
    </div>
    ))
}
 
useEffect(() => {
  setCardsToScreen()
  setTimeChangeCards()
   /*  div1.current.className ='madona' */
     
  }, []);
  
  
  

  return <div>
     <div className="parent">
    <div ref={div1} > {creatNewCard(0)}  </div>
    <div ref={div2}> {creatNewCard(1)}</div>
    <div ref={div3}> {creatNewCard(2)}</div>
    <div ref={div4}> {creatNewCard(3)} </div>
    <div ref={div5}>{creatNewCard(4)} </div>
    <div ref={div6}>{creatNewCard(5)} </div>
    <div ref={div7}>{creatNewCard(6)}</div>
    <div ref={div8}>{creatNewCard(7)} </div>
    </div>
  </div>;
}
