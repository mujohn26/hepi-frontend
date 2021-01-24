import { TramOutlined } from "@material-ui/icons";
import axios from "axios";

export const STAFF_REGISTER_SUCCESSFULLY = "STAFF_REGISTER_SUCCESSFULLY";
export const STAFF_REGISTER_FAILED = "STAFF_REGISTER_FAILED";
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_ROOM_IMAGE_SUCCESS = 'UPLOAD_ROOM_IMAGE';
export const ERROR_UPLOAD_IMAGE = 'ERROR_UPLOAD_IMAGE'

export const staffRegistrationRequest = (firstName,lastName,email,tel,nationality,educationLevel,licence,locProvince,locDistrict,locSector,bio,services,photo) => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true }); 
  try {
    const response = await axios.post(
      `https://hepi-backend-staging.herokuapp.com/api/staff/auth/signup`,{firstName,lastName,email,tel,nationality,educationLevel,licence,locProvince,locDistrict,locSector,bio,services,photo}
	);
	// dispatch({ type: "LOADING", payload: false });
console.log('=-=-=-=-=-=-=-=', photo);
    dispatch(staffRegistrationSuccess(response.data.message));
  } catch (error) {
	dispatch({ type: "LOADING", payload: false });
    const errorMessage = error.response.data.message;
    dispatch(staffRegistrationFailure(errorMessage));
  }
};

export const uploadNewImageOnCloud = (data,index) => async dispatch => {
	dispatch({ type: 'IMAGE_LOADING', payload: true });
	await axios
	.post('https://api.cloudinary.com/v1_1/dby88h516/image/upload', data)
	.then(async res => {
		const imageURL = { key:index,imageUrl: res.data.secure_url };
		dispatch({
			type: UPLOAD_IMAGE_SUCCESS,
			attribute: imageURL,
		});
			dispatch({ type: 'IMAGE_LOADING', payload: false });
		})
		.catch(error => {
			const errorData = {
				errorMessage: 'Fail to upload image please try again',
				updateStatus: false,
			};
			dispatch({
				type: ERROR_UPLOAD_IMAGE,
				attribute: errorData,
			});

		});
};
export function staffRegistrationSuccess(data) {
  return {
    type: STAFF_REGISTER_SUCCESSFULLY,
    payload: data,
  };
}
export function staffRegistrationFailure(data) {
  return {
    type: STAFF_REGISTER_FAILED,
    payload: data,
  };
}
