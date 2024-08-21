const { Client, Account } = Appwrite;
let user = null;

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c54a810015372c4474');

const account = new Account(client);

// Handle login button click
const loginBtn = document.getElementById('login-btn');
if (window.location.pathname === '/login') {
    loginBtn.addEventListener('click', async () => {
        account.createOAuth2Session('google', 'http://localhost:3111/', 'http://localhost:3111/login');

        // Store authentication status in sessionStorage
        sessionStorage.setItem('auth', 'true');

        // Redirect to home page
        window.location.href = '/';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Only if the user is in the home page
    if (window.location.pathname === '/' || window.location.pathname === '/home') { 
        let auth = sessionStorage.getItem('auth');

        let button = document.getElementById('login-btn2');
        if (auth === 'true') {
            getUser().then((user) => {
                button.innerHTML = '<i class="bx bxs-user"></i> Logged in as ' + user.name; 
                button.href = '#';
                button.onclick = logout;
            })
        } else {
            button.innerHTML = '<i class="bx bxs-user"></i> Login';
        }
    }
});

async function getUser() { 
    try { 
        const user1 = await account.get();

        return user1;
    }catch (error) {
        console.log(error);
    }
}

async function logout() {
    sessionStorage.setItem('auth', 'false');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    window.location.href = '/';
}