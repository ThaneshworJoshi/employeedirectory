import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employes: [
        {
          id: 1,
          name: 'Ram',
          age: 33,
          position: 'Manager',
          image:
            'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=',
        },
        {
          id: 2,
          name: 'Shyam',
          age: 32,
          position: 'Employee',
          image:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 3,
          name: 'Kamal',
          age: 22,
          position: 'Employee',
          image:
            'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
        },
        {
          id: 4,
          name: 'John',
          age: 33,
          position: 'Manager',
          image:
            'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=',
        },
        {
          id: 5,
          name: 'Hira',
          age: 32,
          position: 'Employee',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU',
        },
        {
          id: 6,
          name: 'Geeta',
          age: 22,
          position: 'Employee',
          image:
            'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
        },
      ],
      searchEmployees: [],
      searchName: '',
    };
  }

  handleChange = (event) => {
    let name = event.target.value;

    this.setState({ ...this.state, searchName: name });

    let filteredEmployee = this.state.employes.filter((employee) => {
      return employee.name.includes(name);
    });
    this.setState({
      ...this.state,
      searchName: name,
      searchEmployees: filteredEmployee,
    });
  };

  handleSearch = () => {
    const name = this.state.searchName;
    let filteredEmployee = this.state.employes.filter((employee) => {
      if (employee.name.toLowerCase() === name.toLowerCase()) {
        return true;
      }
      return false;
    });

    this.setState({ ...this.state, searchEmployees: filteredEmployee });
  };

  deleteEmployee = (id) => {
    const tempEmployeeList = this.state.employes.filter((employee) => {
      return employee.id !== id;
    });

    this.setState({ ...this.state, employes: tempEmployeeList });
  };

  render() {
    return (
      <div class='wrapper'>
        <div class='header'>
          <h2>Employee Directory</h2>
        </div>
        <div class='example'>
          <input
            type='text'
            value={this.state.searchName}
            onChange={this.handleChange}
            placeholder='Search..'
            name='search'
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div class='container'>
          {this.state.searchEmployees.length !== 0 && (
            <>
              <h2>Search: {this.state.searchName} </h2>
              <ul>
                <div class='container'>
                  {this.state.searchEmployees.map((employee) => (
                    <div class='friend'>
                      <div class='img_name'>
                        <img
                          src={employee.image}
                          alt='Lalit Raghuvanshi'
                          class='roundimage'
                        />
                        <div>
                          <h3>Name: {employee.name}</h3>
                          <p> age {employee.age}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </>
          )}

          {this.state.searchEmployees.length === 0 &&
            this.state.searchName === '' && (
              <ul>
                <div class='container'>
                  {this.state.employes.map((employee) => (
                    <div key={employee.id} class='friend'>
                      <div class='img_name'>
                        <img
                          src={employee.image}
                          alt='Lalit Raghuvanshi'
                          class='roundimage'
                        />
                        <div>
                          <h3>Name: {employee.name}</h3>
                          <p> age {employee.age}</p>
                        </div>
                        <button
                          onClick={() => this.deleteEmployee(employee.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            )}
        </div>
      </div>
    );
  }
}

export default App;
