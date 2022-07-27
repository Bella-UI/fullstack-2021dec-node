async function handleRegister(ev : any) {
    ev.preventDefault();
    try {
        const name = ev.target.elements.userName.value;
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;
        console.log(name, email, password);

        //@ts-ignore
        const {data} = await axios.post("/users/register", {name, email, password});
        console.log(data);

        const { register, error } = data;
        if (error) throw error;
        console.log(data);
    
        if( error && error.includes("E11000")) alert ('email is already in use')
        else {
            window.location.href = "./login.html"
        }
    } catch (error) {
        console.error(error);
    }
};

async function handleLogin(ev : any) {
    ev.preventDefault();
    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;
        console.log(email, password);

        //@ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        console.log(data);

        const {ok} = data;
        if (ok) {
            window.location.href = "./dashboard.html"
        }
    } catch (error) {
        console.error(error);
    }
};