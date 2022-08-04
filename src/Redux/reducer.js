import * as types from "./actionTypes";

const initialState = {
	musicRecords: [],
	isLoding: false,
	isError: false,
};

const reducer = (oldState = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.GET_MUSIC_RECORD_REQUEST:
			return {
				...oldState,
				isLoding: true,
				isError: false,
			};

		case types.GET_MUSIC_RECORD_SUCCESS:
			return {
				...oldState,
				musicRecords: payload,
				isLoding: false,
				isError: true,
			};

		case types.GET_MUSIC_RECORD_FAILURE:
			return {
				isLoding: false,
				isError: true,
			};
		default:
			return oldState;
	}
};

export { reducer };
