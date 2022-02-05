import React, { useRef, useEffect } from 'react';

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

function randomPosition() {
  let x = new Array(9)
  for(let i=1; i<9; i++) {
    x[i] = i; 
  }  
  x.sort((a,b)=> (Math.round(Math.random())-0.5)).pop()
 return x
}
function setCardsToScreen(params) {
    const arrayRandom = randomPosition()
   divs.forEach((item,index)=> item.current.className =`div${arrayRandom[index]}` )  
}
function setTimeChangeCards() {
  
  setInterval(()=>{
    setCardsToScreen()
    
    },5000) 
  
}
 
useEffect(() => {
  setCardsToScreen()
  setTimeChangeCards()
    div1.current.className ='madona'
console.log(div1.current);
  
  }, []);
  


  return <div>
     <div className="parent">
    <div ref={div1} > bruno </div>
    <div ref={div2}> fay</div>
    <div ref={div3}> alves</div>
    <div ref={div4}> tesee </div>
    <div ref={div5}>aracae </div>
    <div ref={div6}>ermanol </div>
    <div ref={div7}>sda </div>
    <div ref={div8}>fer </div>
    </div>
  </div>;
}
