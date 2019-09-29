export default ({ dispatch, getState }) => (next) => (action) => {
	const {
		types,
		callCART,
		payload = {},
		shouldCallCART = () => true,
		transform = v => v,
		parse = response => response.json(),
	} = action

	if (!types) {
		// Normal action: pass it on
		return next(action)
	}

	if (!shouldCallCART(getState())) {
		return Promise.resolve()
	}

	const [ requestType, successType, failureType ] = types 
	dispatch({
		type: requestType,
		payload,
	})	
	return callCART(payload)		
		.then(parse)
		.then(response => dispatch({
			response: transform(response),
			payload,
			type: successType,
		}))
		.catch((error) => dispatch({
			error,
			payload,
			type: failureType
		}))
}
