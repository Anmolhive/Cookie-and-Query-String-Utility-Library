// Cookie Utility Object
const Cookie = {
    // Check if a cookie with the given name exists
    exist: (name) => {
        // Returns a boolean (true if the cookie exists, false otherwise)
        return !!document.cookie
            .split(";")
            .some((e) => e.trim().startsWith(`${name}=`));
    },

    // Get the value of a cookie with the given name
    get: (name) => {
        // Returns a string (the value of the cookie) or undefined if the cookie doesn't exist
        return document.cookie
            .split("; ")
            .find((e) => e.startsWith(`${name}=`))
            ?.split("=")[1];
    },

    // Set a cookie with the provided name, value, and optional expiration days
    set: (name, value, days = 1) => {
        // Does not return any value (returns undefined)
        let date = new Date();
        date.setDate(date.getDate() + days);
        let str = date.toUTCString();
        document.cookie = `${name}=${value}; Secure; expires=${str}; path=/`;
    },
};

// QueryString Utility Object
const QueryString = {
    // Check if a query string exists in the current URL
    exist: function () {
        // Returns a boolean (true if a query string exists, false otherwise)
        let queryString = window.location.search;
        return queryString ? true : false;
    },

    // Get all query parameters as an object
    getAll: function () {
        // Returns an object containing query parameters
        let queryString = window.location.search;
        let queryParams = { query: [] };

        if (!!queryString) {
            queryString = (queryString = queryString.substring(1)).split("&");
            queryString.map((param) => {
                let keyValue = param.split("=");
                let paramObject = {};
                paramObject[keyValue[0]] = keyValue[1];
                queryParams.query.push(paramObject);
            });
        }

        return queryParams;
    },

    // Get the value of a specific query parameter by name
    get: function (name) {
        // Returns a string (the value of the query parameter) or false if not found
        let allQueryParams = this.getAll();
        for (let i = 0; i < allQueryParams.query.length; i++) {
            if (allQueryParams.query[i].hasOwnProperty(name)) {
                return allQueryParams.query[i][name];
            }
        }
        return false;
    },
};

// Function to limit the size of an array by removing elements from the beginning
const limitArraySize = (array, size) => {
    // Returns an array (the modified array with limited size)
    let str = JSON.stringify(array);
    if (str.length <= size) {
        return array;
    } else {
        array.shift();
        return limitArraySize(array, size);
    }
};
