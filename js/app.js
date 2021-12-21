
const fname = document.querySelector('.fname');
const fn = document.querySelector('.fn')
const lname = document.querySelector('.lname');
const ln = document.querySelector('.ln')
const email = document.querySelector('.email');
const em = document.querySelector('.em');
const password = document.querySelector('.psw');
const ps = document.querySelector('.ps');
const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const list = Array.from(e.target);

    list.forEach(item => {
        const inputVal = item.value.trim();


        if (item.name === 'username' && inputVal === "") {
            item.classList.add('error');
            fn.innerHTML = 'First Name cannot be empty';
            item.placeholder = "";
        } else if (item.name === 'username' && inputVal !== "") {
            item.classList.remove('error')
            fn.innerHTML = '';
        };
        if (item.name === 'lastname' && inputVal === "") {
            item.classList.add('error');
            ln.innerHTML = 'Last Name cannot be empty';
            item.placeholder = "";

        } else if (item.name === 'lastname' && inputVal !== "") {
            item.classList.remove('error')
            ln.innerHTML = '';
        };
        if (item.name === 'mail' && !re.test(inputVal)) {
            item.classList.add('error');
            em.innerHTML = 'Looks like this is not email';
            item.placeholder = "";
            item.style.color = 'red'

        } else if (item.name === 'mail' && inputVal !== "") {
            item.classList.remove('error')
            em.innerHTML = '';
            item.style.color = 'black'

        };
        if (item.name === 'password' && inputVal === "") {
            item.classList.add('error');
            ps.innerHTML = 'Looks like this is not email';
            item.placeholder = "";

        } else if (item.name === 'password' && inputVal !== "") {
            item.classList.remove('error')
            ps.innerHTML = '';
        };
    });
})







