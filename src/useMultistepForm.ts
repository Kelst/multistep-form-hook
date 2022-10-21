import { ReactElement, useState } from "react";

export function useMultiStepForm(steps:ReactElement[]){
const [curentIndex,setCurentIndex]=useState(0);
function next(){
setCurentIndex((i)=>{
    // if(i>=steps.length-1) return i
    return i+1
})
}
function back(){
    
    setCurentIndex((i)=>{
        if(i<=0) return i
        return i-1
    })
    }

function goTo(index:number){
    setCurentIndex(index)
}
return {
    curentIndex,
    step:steps[curentIndex],
    isFirstStep:curentIndex!==0,
    isLastStep:curentIndex==steps.length-1,
    goTo,
    back,
    next,
    steps
}
}