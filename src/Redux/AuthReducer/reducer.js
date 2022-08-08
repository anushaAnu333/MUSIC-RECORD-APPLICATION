import * as types from "./actionTypes";

const initialState = {
	isAuth:false,
	token:'',
	isLoading:false,
	isError:false,
};

const reducer = (oldState = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.USER_LOGIN_REQUEST:
			return {
				...oldState,
				isLoding: true,
				
			};

		case types.USER_LOGIN_SUCCESS:
			return {
				...oldState,
				isLoding: false,
				isAuth:true,
				token:payload,
				
			};

		case types.USER_LOGIN_FAILURE:
			return {
				...oldState,
				isLoding: false,
				isAuth:false,
				token:"",
				isError:true,
			};
		default:
			return oldState;
	}
};

export { reducer };
