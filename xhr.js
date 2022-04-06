const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

 const sendHttpRequest = (method, url, data) => {
     const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();    // Global constructor function built into a browser exposed to Java Script
        xhr.open(method, url);

        xhr.responseType = 'json';
        if(data) {
            xhr.setRequestHeader('Content-Type', 'application/json');    
        }

        xhr.onload = () => {
            // const data = JSON.parse(xhr.response);
            // const data = xhr.response;
            // console.log(data); 
            if(xhr.status >= 400) {
              reject(xhr.response);
            } else {
              resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
          reject('Something went wrong!');
        };

        xhr.send(JSON.stringify(data));   
    });
    return promise;    
 };
const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(resposeData => {
        console.log(resposeData);
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
      email: "eve.holt@reqres.in",
      password: "pistol"
    }).then(resposeData => {
        console.log(resposeData);
    }).catch(err => {
      console.log(err);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);