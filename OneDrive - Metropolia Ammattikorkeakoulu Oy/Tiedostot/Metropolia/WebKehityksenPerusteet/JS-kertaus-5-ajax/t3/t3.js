/* Error Handling. Practice error handling while using the Fetch API

- Attempt to make a GET request to a non-existent URL
(e.g., https://reqres.in/api/unknown/23).
- Handle the error using try/catch blocks.
- Also try other methods (POST, PUT, DELETE)
Log an error message to the console in case of an error.
4p */
'use strict';
(async function () {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error in request: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    alert(error.message);
  }
})();

(async function () {
  try {
    const url = 'https://reqres.in/api/login';
    const info = {
      email: 'tentuoi@thbsfn.hh',
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error in request: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    alert(error.message);
  }
})();

(async function () {
  try {
    const url = 'https://reqres.in/api/vhbhhusers';
    const user = {
      name: 'Thuc An',
      job: 'developer',
    };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error in request: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    alert(error.message);
  }
})();

(async function () {
  try {
    const url = 'https://reqres.in/api/user/2';

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error in request: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    alert(error.message);
  }
})();
