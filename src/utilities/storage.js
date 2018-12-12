export function getSessionStorage(keyName) {
    if (typeof (Storage) !== "undefined") {
        if (keyName != null && keyName.trim() !== '') {
            return sessionStorage.getItem(keyName);
        } else {
            return null;
        }
    } else {
        console.log('Sorry! No Web Storage support...');
    }
}

export function setSessionStorage(keyName, data) {
    if (typeof (Storage) !== "undefined") {
        if (keyName != null && keyName.trim() !== '') {
            sessionStorage.setItem(keyName.trim(), data);
            return true;
        } else {
            return false;
        }
    } else {
        console.log('Sorry! No Web Storage support...');
    }
}

export function getLocalStorage(keyName) {
    if (typeof (Storage) !== "undefined") {
        if (keyName != null && keyName.trim() !== '') {
            return localStorage.getItem(keyName);
        } else {
            return null;
        }
    } else {
        console.log('Sorry! No Web Storage support...');
    }
}

export function setLocalStorage(keyName, data) {
    if (typeof (Storage) !== "undefined") {
        if (keyName != null && keyName.trim() !== '') {
            localStorage.setItem(keyName.trim(), data);
            return true;
        } else {
            return false;
        }
    } else {
        console.log('Sorry! No Web Storage support...');
    }
}