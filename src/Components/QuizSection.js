import QuizItem from "./QuizItem"
import Spinner from './Spinner'
import React,{useState,useEffect} from 'react'

// to suffel all choices 
function suffelArr(allAnswers)
{
    let shuffled = allAnswers.slice();
    for(let i=allAnswers.length-1;i>0;i--)
    {    
        let j=Math.floor(Math.random()*(i+1));
        [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    
    }
    return shuffled

}
// main function
function QuizSection(){
  const [results,setResults]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error, setError] = useState(null);  // For handling errors

  useEffect(()=>{
    const fetchQuizData=async()=>{
      let url=`https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple`;
      setLoading(true);
      try{
        const response=await fetch(url);
        if (response.status === 429) 
          {
             // If rate-limited, retry after a delay (e.g., 1 minute)
              setError('Too many requests. Retrying in 1 minute...');
              setTimeout(fetchQuizData, 60000);  // Retry after 1 minute
              return;
          }
        const parsedData=await response.json();
        setLoading(false);
        setResults(parsedData.results);
        console.log("parsedData ",parsedData);


      }
      catch(err){
        console.log("some error occured",err);
      }
    }
    fetchQuizData();
  }, []);  // Empty dependency array to run the effect only once when component mounts
  
    return(
        <>
        <div className="container my-4">
            <h2>Read the questions carefully and answer</h2>
            {loading && <Spinner/>}
           {    
                results.map((val,index)=>{
                   let allAnswers=[val.correct_answer,...val.incorrect_answers];
                   let suffeledAnswers=suffelArr(allAnswers);
                //    console.log("allAnswers: ",allAnswers.length);
                    return <QuizItem
                    key={index}
                    question={val.question}
                    suffeledAnswers={suffeledAnswers}
                    correctChoice={val.correct_answer}
                    questionNo={index+1}/>
                })
            }
            
        </div>
        
        </>
    )

}
export default QuizSection