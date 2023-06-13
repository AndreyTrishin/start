const url = 'https://localhost:7225/'

export function GetUsers() {

  return fetch(url + 'api/Auth/GetUsers').then(response => {
    return response.json()
  });
}


export function RegisterUser(name, password, eMail) {

  const getData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'post'
    });
    return response.json();
  }

  getData(url + 'createuser?userName=' + name + '&password=' + password + '&email=' + eMail).then((data) => {
    console.log(data);
    if (data) {
      return data;
    }
  });
}

export function Auth(login, password) {


  // const getData = async (url = '', data = {}) => {
  //   const response = await fetch(url, {
  //     method: 'post'
  //   });
  //   return response.json();
  // }

  // return getData('https://localhost:7225/api/Auth/Auth?username=1&password=1').then((data) => {
  //   if (data) {
  //     return data;
  //   }
  // });

  return fetch(url + 'api/Auth/Auth?username=' + login + '&password=' + password).then(response => {
    return response.json()
  });
}


export function ChangeRole(idUser) {

  return fetch(url + 'addadminrole?idUser=' + idUser, {
    method: 'post'
  }).then(response => {
    return response.json()
  });
}

// export function CreateCourse(title, description) {
//   var course = {
//     id: 0,
//     title: title,
//     description: description,
//   }
//   return fetch('https://localhost:44331/createcourse', {
//     method: 'post',
//     headers: {
//       "Accept": "application/json", 
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(course)
//   }).then((data) => {
//     return data;
//   });
// }

export function CreateCourse(title, description) {

  var course = {
    id: 0,
    title: title,
    description: description,
  }
  return fetch(url + 'api/Content/CreateCourse', {
    method: 'put',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(course)
  }).then(response => {
    return response.json()
  });
}

export function GetCourseList() {
  return fetch(url + 'api/Content/GetCourseList').then(response => {
    return response.json()
  });
}

export function GetCourse(id) {

  return fetch(url + 'api/Content/GetCourse?id=' + id).then(response => {
    return response.json()
  });
}

// export function GetVideo(id) {
//   //23
//   return fetch(url + 'api/Content/GetVideo?id=' + 23).then(response => {
//     return ;
//   });
// }