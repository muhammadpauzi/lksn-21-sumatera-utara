export function isLoggedIn() {
    return localStorage.getItem('loggedIn') == 1;
}

export function isNotLoggedIn() {
    return localStorage.getItem('loggedIn') != 1;
}

export function getData() {
    return JSON.parse(localStorage.getItem('data'));
}