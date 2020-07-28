function check() {
    var score = 0
    var right_answer_1 = document.getElementById('q3-a1');
    var q3_answer_2 = document.getElementById("q3-a2")
    var q3_answer_3 = document.getElementById("q3-a3")
    var q3_answer_4 = document.getElementById("q3-a4")
    if (right_answer_1.checked == true) {
        score++
        alert('Correct !')
    }
    else {
        alert('Incorrect !')
    }
}