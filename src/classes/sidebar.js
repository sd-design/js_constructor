export class Sidebar {
	constuctor(selector) {
		this.$el = document.querySelector(selector);

		this.$el.insertAdjacentHTML('afterbegin', '<h1>Sidebar</h1>') 
	}
}