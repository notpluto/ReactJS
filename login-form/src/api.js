const user = {
	firstname: "dragon",
	lastname: "disaster",
}

export function handleLogin(username, password) {
	return new Promise((resolve, reject) => {
		if(username=== "dragon" && password==="stone") {
			resolve(user) 
		} else {
				reject("you don't exist")
			}
	});
}

