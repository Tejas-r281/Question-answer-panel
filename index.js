const box = document.querySelector('.box');
const container = document.querySelector('.container')
const timesolt = document.createElement('div')
const btn = document.querySelector('.btn');
const intialtime= new Date();
timesolt.setAttribute('class', 'timesolt');
// timesolt.innerHTML=`${time}`;
box.insertAdjacentElement('afterbegin', timesolt)
setInterval(() => {
    const time = new Date().toLocaleTimeString();
    timesolt.innerHTML = `${time}`

}, 1000);

let score=0;
let condition=0;
const endpage = document.createElement('div');
endpage.setAttribute('class', 'endpage');
const question = [
    {
        q: "What is the capital of India",
        a: 'Delhi',
        b: 'Mumbai',
        c: 'Kolkata',
        d: 'Patna',
        ans: 'a'
    },
    {
        q: "How many different type of subname of India",
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        ans: 'd'
    }
    ,
    {
        q: "who is the Narendra Modi",
        a: 'PM',
        b: 'CM',
        c: 'Dm',
        d: 'judge',
        ans: 'a'
    }
]
// console.log(question[2]);
const alloptions = document.querySelectorAll('.one');
const questions = document.querySelector('.header');
// const box= document.querySelector('.box');
// console.log(questions);
let arrindex = -1;
const question_load = () => {
    arrindex++;
    const check = document.querySelectorAll('.check')
    check.forEach((element) => {
        if(element.checked &&question[arrindex-1])
        {
            // console.log(element.id);
            const temp1=(element.id == question[arrindex-1].ans);
            console.log(temp1);
            if(temp1)
            {
                score +=1;
                console.log( question[arrindex-1].ans);
                // console.log("enter");
            }
            element.checked=false;
            // console.log(score);
        }
    })
   
    let temp = question[arrindex];
    // console.log(temp.q);
    if (temp) {
        // console.log(score);
        if(arrindex==question.length-1)
        {
            // console.log("last");
            btn.innerHTML="This is last, Now Result";
        }
        questions.innerHTML = `${1 + arrindex} . ${temp.q}`
        alloptions[0].innerHTML = temp.a;
        alloptions[1].innerHTML = temp.b;
        alloptions[2].innerHTML = temp.c;
        alloptions[3].innerHTML = temp.d;
    }
    else
    {
        if(condition<1)
        {
            console.log('inside');
          
            
            // clearcontent('container');
            // btn.addEventListener('click',()=>{
                const timetaken =( new Date()-intialtime);
                const timetak= document.createElement('div');
                // timetak.setAttribute('class','timetak');
                // timetak.innerHTML=`you havet taken ${timetaken/1000} s.`
                // timetak.insertAdjacentElement('beforeend',container);

               
                console.log(timetaken);
                container.innerHTML="";
                container.insertAdjacentElement('afterbegin',endpage);
                endpage.innerHTML=`<h1>Your total score :  ${score} <br> and keep practicing <br> best of luck <h1> `;
                // btn.removeEventListener('click',question_load);
                box.innerHTML="";
                timetak.setAttribute('class','timetak');
                timetak.innerHTML=`you have taken ${timetaken/1000} s.`
                // timetak.insertAdjacentElement('',container);
                container.appendChild(timetak)
            // })

            condition++;
        }
    }
}

question_load();


btn.addEventListener('click', question_load)

const reload = document.createElement('div');

reload.setAttribute('class', 'reload');

reload.innerHTML = `Reload Question`;
container.insertAdjacentElement('afterbegin', reload);

reload.addEventListener('click', () => {
    location.reload();
})


