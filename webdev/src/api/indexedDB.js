const DB_NAME = 'myDB';
const DB_VERSION = 1;
let DB;

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				console.log('success')
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("user", { autoIncrement: true, keyPath:'id' });

			};
		});
	},
	async deleteUser(user) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction('user','readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('users');
			store.delete(user.id);
		});	
	},
	async getUser() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction('user','readonly');
			trans.oncomplete = () => {
				resolve(users);
			};
			
			let store = trans.objectStore('users');
			let users = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					users.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveUser(user) {

		let db = await this.getDb();
		console.log(db)

		return new Promise(resolve => {

			var trans = db.transaction('users','readwrite');
			console.log(trans)
			trans.oncomplete = () => {
				resolve();
			};

			var store = trans.objectStore('users');
			store.put(user);
			console.log(store)

		});
	
	}

}