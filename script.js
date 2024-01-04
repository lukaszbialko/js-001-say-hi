const hi = document.querySelector('.hi')
const name = document.querySelector('.name')
const btnHi = document.querySelector('.btn-hi')

const hello = () => {
    const yourName = name.textContent = prompt('Jak się nazywasz?')


    if(name.textContent === '' || name.textContent === null) {
        name.textContent = 'Nieznajomy!'
        hi.textContent = 'Cześć'
    } else {
        name.textContent = yourName.charAt(0).toUpperCase() + yourName.slice(1)
        hi.textContent = 'Cześć'
    }

}

btnHi.addEventListener('click', hello)