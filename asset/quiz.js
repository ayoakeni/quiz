  // const QuiZ = document.querySelector('.answer-1');
  // let conTe = 'Correct';
  // document.querySelector('.answer-1').innerHTML = conTe;

  // function click () {
  //   const quiZo = document.querySelector('.answer-1');
  //   let cRt = 
  // }

  // function click () {
  //   const quiZo = document.getElementById('crt4');
  //   let cRt4 = quiZo;
  //   document.getElementById('answer1').innerHTML = cRt4;
  // }

  // const QuiZo = [
  //   {
  //     id:0,
  //     content: 'wrong answer',
  //   },
  //   {
  //     id:1,
  //     content: 'wrong answer',
  //   },
  //   {
  //     id:2,
  //     content: 'wrong answer',
  //   },
  //   {
  //     id:3,
  //     content: 'Correct answer',
  //   }
  // ];
  
  // const oPtion = [...new Set(QuiZo.map((quiZo)=>
  //   {return quiZo}))]
    
  //   let i = oPtion;

  var counter = 0
  var score_counter = 0
  const QuiZo =
  [
    {
     id: 0, 
     content: "1. Which of the following is not a living organism:",
     option: ["Rat", "Snake", "Ant", "Table"],
     answer: "Table"
    }, 

    {
     id: 1, 
     content: "2. If Tunde has five (5) oranges and gives his friend's 2 each, how many oranges does tunde has left? ",
     option: ["Four", "Two", "One", "none"],
     answer: "One"
    },
    {
      id: 2, 
      content: "3. Who is the current president of nigeria?",
      option: ["Muhammadu Buhari", "Alinko Dangote", "Ahmed Bola Tinubu", "None of the above"],
      answer: "Ahmed Bola Tinubu"
     }
    
  ]
 
  var result = "Null"
  function get_submit()
  {
    console.log("submitted")
    let singleItem = QuiZo[counter]
    let factor = "null"
    if(QuiZo[counter].option[parseInt(result)-1] == singleItem.answer)
    {
      document.getElementById('answer').innerHTML = result +  "is the correct answer!";
      // alert(result + " is the correct answer!");
      score_counter += 10;
      document.getElementById("score-box").innerHTML = score_counter;
      factor = "CORRECT!"
    }
    
    else
    {
      document.getElementById('answer').innerHTML = result +  "is the wrong answer!";
      // alert(result + " is the wrong answer!")
      if(score_counter > 3)
      {
        score_counter -= 3;
      }
      factor = "INCORRECT!"
    }

      document.getElementById('answer').innerHTML = "<br>" + factor + "<br>The Correct Answer is " + singleItem.answer;
      counter += 1;
      document.getElementById("score-box").innerHTML = score_counter;
      const myTimeout = setTimeout(get_iterator, 2500);
  }

  function get_iterator(){
    // alert(QuiZo.length)
    // alert(counter)
    if (QuiZo.length != counter)
    {
      replace_question = document.getElementById("question-box")
      replace_question.innerHTML = "<p class='fs-5'>" + QuiZo[counter].content + "</p><div class='option d-flex column-gap-3 text-white'><div class='role-one col d-flex justify-content-center flex-column row-gap-3'><div class='form-check'><input onclick='get_option(1)' class='form-check-input' checked type='radio' name='flexRadioDefault' id='0'><label class='col-12 bg-primary py-1 px-2 rounded' for=''>" + String(QuiZo[counter].option[0]) + "</label></div><div class='form-check'><input onclick='get_option(2)' class='form-check-input' type='radio' name='flexRadioDefault' id='1'><label class='col-12 bg-success py-1 px-2 rounded' for=''>" + String(QuiZo[counter].option[1]) + "</label></div></div><div class='col role-two d-flex flex-column row-gap-3'><div class='form-check'><input onclick='get_option(3)' class='form-check-input' type='radio' name='flexRadioDefault' id='2'><label class='col-12 bg-warning py-1 px-2 rounded' for=''>" + String(QuiZo[counter].option[2]) + "</label></div><div class='form-check'><input onclick='get_option(4)' class='form-check-input' type='radio' name='flexRadioDefault' id='crt'><label class='col-12 bg-danger py-1 px-2 rounded' for=''>" + String(QuiZo[counter].option[3]) + "</label></div></div></div><p id='answer' class='mt-1 px-4'></p><div class='text-end pe-2'><button class='btn btn-primary' onclick='get_submit()'>Submit</button></div>"

      // console.log("submitted moving on to the next question")
    }

    else 
    {
      document.getElementById('answer').innerHTML = "Congratulations you have gotten to the end of the quiz";
      //alert("Congratulations you have to end og=f the quiz")
      // if number of questions answered is equal to the number of question set display final score. This means that the number of questions available as all been answered
    }
  }

function get_option(answer)
{
  result = answer
  // alert(QuiZo[counter].option[parseInt(result)-1])
}