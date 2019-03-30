const user = {
	firstname: "dragon",
	lastname: "disaster",
}

export function handleLogin(username, password) {
	return new Promise((resolve, reject) => {
		if(username=== "dragon" && password==="stone") {
			setTimeout(() => 
				resolve(user), 2000)
		} else {
				reject("Make sure you exist")
			}
	});
}

