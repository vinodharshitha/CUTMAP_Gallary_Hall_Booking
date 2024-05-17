const selectTime = document.querySelectorAll('.select-time-Label');

selectTime.forEach((select=>{
    select.addEventListener('click',()=>{
        selectTime.forEach(s=>{s.classList.remove('text-white','bg-blue-700'); s.classList.replace('border-transparent','border-gray-400')});
        select.classList.add('text-white','bg-blue-700');
        select.classList.replace('border-gray-400','border-transparent');
    });
}))