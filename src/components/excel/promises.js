// console.log('pizda typaja')

// const ebanatka = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Prepaire data...")

// 		const aws = {
// 			name: 'azure',
// 			port: 3000
// 		}

// 		resolve(aws)
// 	}, 2000);
// })

// ebanatka.then((data) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.id = 123,
// 				resolve(data)
// 		}, 4000);
// 	})
// })
// 	.then((item) => {
// 		item.umnozNaNol = true
// 		console.log("shmara ebychaja:", item)
// 		return item
// 	})
// 	.then((i) => {
// 		i.umnozNaNol = false
// 		console.log("shmara ebychaja ty:", i)


// const poshlaNahyi = ms => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(), ms)
// 	})
// }

// poshlaNahyi(2000).then(() => console.log('sebala za 2 sek'))
// poshlaNahyi(4000).then(() => console.log('sebala za 4 sek'))

// Promise.all([poshlaNahyi(2000), poshlaNahyi(4000)]).then(() => console.log("sebalas nahyi dyra"))
// Promise.race([poshlaNahyi(2000), poshlaNahyi(5000)]).then(() => console.log("nakonecto sebalas"))

const arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myFunc = function (n) {
	return this.map(i => i * n)
}

console.log([4, 5, 4, 2].myFunc(2))