import QuizItem from "./QuizItem"
let questionArr=[
    {
        "type": "multiple",
        "difficulty": "medium",
        "category": "General Knowledge",
        "question": "In what year was McDonald&#039;s founded?",
        "correct_answer": "1955",
        "incorrect_answers": [
          "1964",
          "1951",
          "1947"
        ]
      },
      {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Video Games",
        "question": "When was Club Penguin launched?",
        "correct_answer": "October 24, 2005",
        "incorrect_answers": [
          "October 21, 2005",
          "March 29, 2006",
          "November 22, 2004"
        ]
      },
      {
        "type": "boolean",
        "difficulty": "easy",
        "category": "Entertainment: Musicals &amp; Theatres",
        "question": "In the play Oedipus Rex, Oedipus kills his father due to jealousy in loving his mother.",
        "correct_answer": "False",
        "incorrect_answers": [
          "True"
        ]
      },
      {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Music",
        "question": "Who had a 1983 hit with the song &#039;Africa&#039;?",
        "correct_answer": "Toto",
        "incorrect_answers": [
          "Foreigner",
          "Steely Dan",
          "Journey"
        ]
      },
      {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Entertainment: Music",
        "question": "The song &quot;Feel Good Inc.&quot; by British band Gorillaz features which hip hop group?",
        "correct_answer": "De La Soul",
        "incorrect_answers": [
          "Public Enemy",
          "OutKast",
          "Cypress Hill"
        ]
      },
      {
        "type": "multiple",
        "difficulty": "hard",
        "category": "Science &amp; Nature",
        "question": "Coulrophobia is the irrational fear of what?",
        "correct_answer": "Clowns",
        "incorrect_answers": [
          "Cemeteries",
          "Needles",
          "Tunnels"
        ]
      },
      {
        "type": "boolean",
        "difficulty": "medium",
        "category": "Entertainment: Video Games",
        "question": "Nintendo started out as a playing card manufacturer.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "type": "multiple",
        "difficulty": "easy",
        "category": "General Knowledge",
        "question": "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
        "correct_answer": "Cabbage Patch Kids",
        "incorrect_answers": [
          "Transformers",
          "Care Bears",
          "Rubik&rsquo;s Cube"
        ]
      },
      {
        "type": "boolean",
        "difficulty": "medium",
        "category": "Science: Computers",
        "question": "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
        "correct_answer": "False",
        "incorrect_answers": [
          "True"
        ]
      },
      {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science &amp; Nature",
        "question": "Rhinoplasty is a surgical procedure on what part of the human body?",
        "correct_answer": "Nose",
        "incorrect_answers": [
          "Ears",
          "Chin",
          "Neck"
        ]
      }
]
function suffelArr(allAnswers){
    let shuffled = allAnswers.slice();
    for(let i=allAnswers.length-1;i>0;i--)
    {    
        let j=Math.floor(Math.random()*(i+1));
        [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    
    }
    return shuffled

}
function QuizSection(){
    return(
        <>
        <div className="container my-4">
            <h2>Read the questions carefully and answer</h2>
           {    
                questionArr.map((val,index)=>{
                   let allAnswers=[val.correct_answer,...val.incorrect_answers];
                   let suffeledAnswers=suffelArr(allAnswers);
                //    console.log("allAnswers: ",allAnswers.length);
                    return <QuizItem
                    key={index}
                    question={val.question}
                    suffeledAnswers={suffeledAnswers}
                    correctChoice={val.correct_answer}/>
                })
            }
            
        </div>
        
        </>
    )

}
export default QuizSection