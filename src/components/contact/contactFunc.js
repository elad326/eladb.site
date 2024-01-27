//check if the text is hebrew 
export function contains_heb(str) {
    return (/[\u0590-\u05FF]/).test(str);
  }
  
  //email validation
export const validateEmail = (email) => {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)
  };

export function phoneNumber(telNum) {
          
    return (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(telNum);

}
