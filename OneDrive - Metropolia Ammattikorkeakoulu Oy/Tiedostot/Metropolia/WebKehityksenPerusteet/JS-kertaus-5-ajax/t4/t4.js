/* Generic Fetch Function. Create a reusable async function that abstracts
the Fetch API usage and handles errors.
- Define an async function named fetchData that takes two parameters: url
and options.
- Use the Fetch API with async/await to make a request to the specified url
with the provided options.
- If the response is not successful (status code other than 2xx), throw an
error with an appropriate message.
- Return the response as a JSON promise if successful.
- When testing the function:
    + Call the fetchData function with the desired URL and options. Example:
try {
   const user = {
      name: 'John Doe',
      job: 'Developer'
   };
   const url = 'https://reqres.in/api/users';
   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
   }
   const userData = await fetchData(url, options);
   console.log(userData);
 } catch (error) {
   console.error('An error occurred:', error);
 }
Handle any errors using try/catch blocks to customize error handling.
5p */
'use strict';
async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    console.log(response);
    throw new Error(`Error in request: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

// self invoking function (xem them)
(async function () {
  try {
    const user = {
      name: 'John Doe',
      job: 'Frontend Developer',
    };
    const url = 'https://reqres.in/api/users/2';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    alert(error.message);
  }
})();
