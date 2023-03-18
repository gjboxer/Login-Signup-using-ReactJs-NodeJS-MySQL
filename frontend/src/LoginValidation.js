function Validation(values) {
    let error={}
    const email_pattern=/\S+@\S+\.\S+/
    const password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    if(values.email===""){
        error.email="Name not empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email didnt match"
    }
    else{
        error.email=""
    }

    if(values.password===""){
        error.password="Pass not empty"
    }
    else if (!password_pattern.test(values.password)) {
        error.password="Pass not match"
    }
    else{
        error.password=""
    }
    // console.log("h1efwfvv");
    // console.log(error);
    return error;
    
}
export default Validation;