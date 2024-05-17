
const selectTimeLapseContainer = document.querySelectorAll('.select-lapse-container');
const displayCustomDate = document.querySelector('.display-custom-date');
const hallPrice = document.querySelector('.hall-price');
const totalHallPrice = document.querySelector('.total-hall-price');
const timeLabel = document.querySelectorAll('.time-label');
const timeBox = document.querySelectorAll('.time-box');
const inputTime = document.querySelectorAll('.input-time');
// timeLpase function
function timeLapse(hour)
{
    const lapse=[];
    let k=0;
    let stringToNum;
    for(let i=8;i<=20;i+=hour)
    {
        if(i+1!=19)
        {
        if(i>12)
        {
            k = Number(i.toString())-2;
            stringToNum = Number(k.toString().charAt(1));
            lapse.push(`${stringToNum}-${stringToNum+hour} PM`);
        }
        else
        {
            if(i==12)
            lapse.push(`${12}-${1} PM`);
            else
            lapse.push(`${i}-${i+hour} AM`);
        }

    }
}
    return lapse;
}
// by default timelpase is set to be 1
// timeLapse(1);
// manual change by user
console.log(timeLapse(1));
timeLapse(1).forEach((lapse,index)=>{
    timeLabel[index].innerHTML=lapse;
    // set lapse as value of input tag
    inputTime[index].value = lapse;
    timeLabel[index].classList.add('active-time');
    // console.log(index)
});
selectTimeLapseContainer.forEach((lapseContainer,index)=>{
    lapseContainer.addEventListener('click',()=>{
    //    select timeing hr and set the price according to the hrs
        const staffCharges  = document.querySelector(".staff-charges").innerHTML.split("₹")[1];
        const hallMaintence  = document.querySelector(".hall-maintainance").innerHTML.split("₹")[1];
        displayCustomDate.innerHTML=index+"HR";
        hallPrice.innerHTML=`₹${500*index}`;
        totalHallPrice.innerHTML = `₹${500*index+Number(staffCharges)+Number(hallMaintence)}`;

        selectTimeLapseContainer.forEach(s=>{s.classList.remove('bg-gray-200');s.classList.replace('text-black','text-gray-500')});
        lapseContainer.classList.add('bg-gray-200');
        lapseContainer.classList.replace('text-gray-500','text-black') ;
        
        // removing active-time class from timelabel for detect to which time is stay visible
        timeLabel.forEach(tm=>tm.classList.remove('active-time'));
        // select time according to select time index    
        timeLapse(index).forEach((lapse,index)=>{
            timeLabel[index].innerHTML=lapse;
            inputTime[index].value = lapse;
            timeLabel[index].classList.add('active-time');  
            // console.log(index)
        });

// hide that time slots who have not contains active-time class
timeLabel.forEach((tm,index)=>{
    if(!tm.classList.contains('active-time'))
        timeBox[index].classList.add('hidden');
    else
        timeBox[index].classList.remove('hidden');
});
});
});

