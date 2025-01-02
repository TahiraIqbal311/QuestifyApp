import { useState } from "react";

function QuizItem({question,suffeledAnswers,correctChoice,questionNo}){
    const [selectedAns,setSelectedAns]=useState(); 

  function  handleSubmitAns(){
    if(selectedAns===correctChoice)
    alert("congratulations! ",correctChoice);
    else
    alert("wrong choice");
    }
    function selectedAnsHandel(evt){
        setSelectedAns(evt.target.value);

    }
    return(
        <>
        <div className="card my-3 text-bg-light" style={{width: "80%"}}>
            <div className="card-body ">
                <h5 className="card-title">{`Q${questionNo}: ${question}`}</h5>
                {
                    suffeledAnswers.map((el,idx)=>{
                       return <div key={idx}><input onChange={selectedAnsHandel} type="radio"id={`option${idx}`} value={el} name={`question-${question}`}/>
                        <label className="mx-2"  htmlFor={`option${idx}`} >{el}</label><br/><br/></div>
                    })
                
                }
                <button  onClick={handleSubmitAns}className="btn btn-outline-success ">Submit</button>
            </div>
        </div>
        </>
    )

}
export default QuizItem