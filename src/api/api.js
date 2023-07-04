export const fetchEmployees = () => fetch("https://randomuser.me/api/?results=5t")
  .then(response => response.json());