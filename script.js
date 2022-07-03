const buttons = document.querySelectorAll('.contents__ul--li')
const submit = document.querySelector('.contents__btn');
const contents = document.querySelector('.contents');
const thankyou = document.querySelector('.submission');
const scoreFeedback = document.querySelector('.submission__outof');

submit.addEventListener('click', () => {
    contents.classList.add('hide');
    thankyou.classList.remove('hide');
})

for(let button of buttons){
    button.addEventListener('click', () => {
        buttons.forEach( bt => bt.classList.toggle('active__color',bt===button))

        let score = button.textContent;

        scoreFeedback.textContent = `You selected ${score} out of 5`;
    })
}