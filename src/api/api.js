const _employees = [
  {
    id: 1, 
    firstName: 'John', 
    lastName: 'Steele', 
    experience: 4, 
    age: 26, 
    address: '905 Hannah Corners Adamsstad RM14 3PA',
  },
  {
    id: 2, 
    firstName: 'Ann', 
    lastName: 'Cooper', 
    experience: 5, 
    age: 28, 
    address: '5 Donna Station Ellisshire DE15 9DU',
  },
  {
    id: 3, 
    firstName: 'Derrick', 
    lastName: 'Johnston', 
    experience: 2, 
    age: 23, 
    address: '3 Zach Greens Jonesfort FK3 8EP',
  },
]

export default {
  getEmployees(cb) {
    setTimeout(() => cb(_employees), 100)
  }
}