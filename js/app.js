function check(){
    var score = 0
    var right_answer_2 = document.getElementById('q1-a2');
    var q1_answer_1 = document.getElementById("q1-a1")
    var q1_answer_3 = document.getElementById("q1-a3")
    var q1_answer_4 = document.getElementById("q1-a4")
    if (right_answer_2.checked == true) {
        score++
        alert('Correct !')
    }
    else {
        alert('Incorrect !')
    }


}