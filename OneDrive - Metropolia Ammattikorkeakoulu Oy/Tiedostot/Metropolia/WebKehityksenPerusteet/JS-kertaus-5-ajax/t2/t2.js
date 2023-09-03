/* POST Method. Practice making a POST request using the Fetch API with async/await
 and handling the response.

- Make a POST request to the URL https://reqres.in/api/users with a JSON payload
containing user information ( e.g., name and job).
- Log the response data to the console.
3p */
'use strict';
(async function () {
  try {
    const user = {
      name: 'Lenni Nelonen',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
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
