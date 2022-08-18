const result = document.getElementById('display')

function calculate(num) {
    result.value += num;

}
function clr() {
    result.value = '';
}
function del() {
    result.value = result.value.slice(0, -1);
}

function Result() {
    result.value = eval(result.value);
}
