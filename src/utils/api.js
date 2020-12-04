const mocks = {
	auth: { POST: { token: 'This-is-a-mocked-token' } },
	'user/me': { GET: { name: 'Phile', title: 'sir' } },
}

const apiCall = ({ url, data, method }) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (url === 'auth') {
				try {
					const { username, password } = data
					if (username === 'phile' && password === 'dev.trai') {
						resolve(mocks[url][method || 'GET'])
					} else {
						reject(new Error('Unauthorized!'))
					}
				} catch (err) {
					reject(new Error(err))
				}
			} else {
				resolve(mocks[url][method || 'GET'])
			}
		}, 1000)
	})

export default apiCall
