const fnInput = document.querySelector('#first_name');
const lnInput = document.querySelector('#last_name');
const emailInput = document.querySelector('#email');

// This is just for front-end testing
const users = [];

const createUser = ( { firstName, lastName, email } ) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
});

const onSubmit = () => {
  const user = {
    firstName: fnInput.value,
    lastName: lnInput.value,
    email: emailInput.value
  };

  users.push(createUser(user));
};