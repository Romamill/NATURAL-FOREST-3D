
// Перемінні позиції миші привязуємо до позиції сцени css/ Моніторим

// Моніторимо позицію курсору
// Беремо дану позицію миші і передаємо її в css
document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        ` 
    }) 

})

function redirectToDonate() {
    window.location.href = "https://www.donatemenu.com/";
}