export default class APIService{
    static LogIn(body){
        return fetch(`http://localhost:5000/pythonlogin/.`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })    
    .then(response => response.json())
    .catch(error => console.log(error))
    }

    static SignUp(body){
        return fetch(`http://localhost:5000/pythonlogin/register`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}