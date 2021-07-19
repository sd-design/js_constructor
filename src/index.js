 console.log('%c Constructor is running', 'background: #222; color: #bada55; padding:15px')
import {model} from './model'
import {title, text, columns, image} from './templates'
import './css/main.css'

const $site = document.querySelector('#site')
let html = '';

 model.forEach(block => {
	 if (block.type === 'title'){
		html = title(block)
	 }
	 else if (block.type === 'text'){
		html = text(block)
	 }
	 else if (block.type === 'image'){
		 html = image(block)
	 }
	 else if (block.type === 'columns'){

		 html = columns(block)
	 }
	 $site.insertAdjacentHTML('beforeend', html)

 })