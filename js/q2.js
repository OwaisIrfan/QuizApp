function check() {
    var score = 0
    var right_answer_4 = document.getElementById('q2-a4');
    var q2_answer_1 = document.getElementById("q2-a1")
    var q2_answer_2 = document.getElementById("q2-a3")
    var q2_answer_3 = document.getElementById("q2-a4")
    if (right_answer_4.checked == true) {
        score++
        alert('Correct !')
    }
    else {
        alert('Incorrect !')
    }
}