const restaurantRow = (restaurant) => {
  const {name, address, company} = restaurant;
  const tr = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.innerText = restaurant.name;
  const addressCell = document.createElement('td');
  addressCell.innerText = restaurant.address;
  const companyCell = document.createElement('td');
  companyCell.innerText = restaurant.company;
  tr.appendChild(nameCell);
  tr.appendChild(addressCell);
  tr.appendChild(companyCell);
  return tr;
}

const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  let html = `<h3>${name}</h3>
      <p>${company}</p>
      <p>${address} ${postalCode} ${city}</p>
      <p>${phone}</p>
      <table>
        <tr>
          <th>Course</th>
          <th>Diet</th>
          <th>Price</th>
        </tr>
      `;
  menu.courses.forEach((course) => {
    const {name, diets, price} = course;
    html += `
        <tr>
          <td>${course.name}</td>
          <td>${course.diets ?? ' - '}</td>
          <td>${course.price ?? ' - '}</td>
        </tr>
        `;
  });
  html += '</table>';
  return html;

};

const errorModal = (message) => {
  const html = `
  <h3>Error</h3>
  <p>${message}</p>
  `;
  return html;
}

export {restaurantRow, restaurantModal, errorModal};
