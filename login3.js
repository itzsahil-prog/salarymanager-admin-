document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    if (username === 'itzsahil54' && password === 'sahil123654' && role === 'admin') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'rishika54' && password === 'Rishika54' && role === 'admin') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'aman54' && password === 'Aman54' && role === 'admin') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'ritik54' && password === 'Ritik54' && role === 'admin') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'itzsamayra' && password === 'samayra54' && role === 'employee') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'itzsohil' && password === 'sohil54' && role === 'employee') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'itzritika' && password === 'ritika54' && role === 'employee') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'itzaravi' && password === 'aravi54' && role === 'employee') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
    if (username === 'itzravi' && password === 'ravi54' && role === 'employee') {
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = 'index.html'; // Redirect to salary management system
    } else {
        document.getElementById('message').innerText = 'Invalid credentials or role!';
    }
});