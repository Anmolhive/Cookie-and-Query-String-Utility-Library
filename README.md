# Cookie and QueryString Utility Library

This is a utility library that provides functions for working with cookies and query strings in JavaScript. It also includes a function for limiting the size of an array. In this README, we will cover the features, speed factors, and the motivation behind creating this library.

## Motivation

**Why Create This Utility Library?**

I created this utility library out of the need for efficient and lightweight solutions to common web development tasks. The motivation behind this library stems from several factors:

1. **Repetitive Use**: In web development, managing cookies and query strings is a common task. I found myself repeatedly writing similar code to handle these operations across different projects.

2. **No Built-in Functions**: JavaScript lacks built-in functions for many cookie and query string operations. Developers often resort to third-party libraries, which can be heavy and impact page speed.

3. **Page Speed Optimization**: Loading large libraries for simple tasks can slow down web pages. I aimed to create a library that is lightweight, efficient, and doesn't add unnecessary overhead to projects.

4. **Simplicity**: I wanted to create a utility library that is easy to understand and use. The functions in this library are designed to be straightforward and require minimal lines of code.

## Cookie Utility

### Features
- **exist(name)**: Check if a cookie with the given name exists.
- **get(name)**: Get the value of a cookie with the given name.
- **set(name, value, days = 1)**: Set a cookie with the provided name and value, and optionally specify the number of days until the cookie expires.

### Usage
```javascript
// Check if a cookie exists
const cookieExists = Cookie.exist("myCookie");

// Get the value of a cookie
const cookieValue = Cookie.get("myCookie");

// Set a cookie that expires in 7 days
Cookie.set("myCookie", "cookieValue", 7);
```

## QueryString Utility

### Features
- **exist()**: Check if a query string exists in the current URL.
- **getAll()**: Get all query parameters as an object.
- **get(name)**: Get the value of a specific query parameter by name.

### Usage
```javascript
// Check if a query string exists
const queryStringExists = QueryString.exist();

// Get all query parameters as an object
const allQueryParams = QueryString.getAll();

// Get the value of a specific query parameter
const specificQueryParam = QueryString.get("paramName");
```

## limitArraySize Function

### Features
- **limitArraySize(array, size)**: Limit the size of an array by removing elements from the beginning of the array until it reaches the specified size.

### Usage
```javascript
const myArray = [1, 2, 3, 4, 5];
const limitedArray = limitArraySize(myArray, 3);
```

## Speed Factors

- **Cookie Existence Check**: The `Cookie.exist(name)` function iterates through the cookies to check if a cookie with the given name exists. The time complexity of this operation is O(n), where n is the number of cookies. In most cases, this operation is fast as the number of cookies is typically small.

- **Cookie Retrieval**: The `Cookie.get(name)` function searches for a specific cookie by name, and its time complexity is O(n), where n is the number of cookies.

- **Cookie Setting**: The `Cookie.set(name, value, days)` function sets a cookie, and its performance depends on the browser's ability to set cookies. Setting a cookie is generally fast.

- **Query String Existence Check**: The `QueryString.exist()` function checks if a query string exists in the URL. This operation is very efficient with a time complexity of O(1).

- **Query Parameter Retrieval**: The `QueryString.getAll()` function parses and extracts all query parameters from the URL, which is typically efficient, but the time complexity depends on the length of the query string.

- **Query Parameter Retrieval by Name**: The `QueryString.get(name)` function retrieves a specific query parameter by name. It first calls `QueryString.getAll()` and then searches for the parameter, so its time complexity is O(m), where m is the number of query parameters.

- **Array Size Limiting**: The `limitArraySize(array, size)` function recursively removes elements from the beginning of the array until it reaches the specified size. The time complexity of this operation is O(n), where n is the size of the array.

## Conclusion

This utility library provides convenient functions for working with cookies, query strings, and array size limiting. The motivation behind creating this library was to offer a lightweight, efficient, and easy-to-use solution for common web development tasks while optimizing page speed and avoiding the need for heavy third-party libraries. In most practical scenarios, these functions should perform efficiently and enhance the development experience.