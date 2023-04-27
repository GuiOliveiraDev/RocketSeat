const openModalBtn = document.getElementById('openModal');

const modalWrapper = document.getElementById('modal-wrapper');

openModalBtn.addEventListener('click', modalOpen = () =>{
    modalWrapper.classList.remove('invisible')
})

document.onkeydown = (event) => {
    const isInvisible = modalWrapper.classList.value === '';
    const isEsc = event.key === 'Escape'
    if (isInvisible && isEsc){
        modalWrapper.classList.add('invisible');
    }
};