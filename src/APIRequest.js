
export function GetUsers() {

  const getData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'get',
    });
    return response.json();
  }

  getData('https://localhost:44331/allusers')
    .then((data) => {
      console.log(data);
    });
}

export function RegisterUser(name, password, eMail) {

  const getData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'post'
    });
    return response.json();
  }

  getData('https://localhost:44331/createuser?userName=' + name + '&password=' + password + '&email=' + eMail).then((data) => {
    console.log(data);
    if (data) {
      return data;
    }
  });
}

export function Auth(login, password) {


  const getData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'post'
    });
    return response.json();
  }

  return getData('https://localhost:44331/auth?login=' + login + '&password=' + password).then((data) => {
    if (data) {
      return data;
    }
  });
}