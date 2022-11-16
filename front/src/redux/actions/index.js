import axios from "axios";


export function getUserDetail(mail) {
    return async function(dispatch) {
      const userMail = await axios(`/user/${mail}`);
  
      return dispatch({
        type: GET_USER_MAIL,
        payload: userMail.data
      });
    };
  }
  