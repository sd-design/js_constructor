import {row, col, h1, p, img} from './utils'

function title(block){
		 return row(col(h1(block.value)))
 }

function text(block){
	return row(col(p(block.value)))
 }

function image(block){
	return row(col(img(block.value)))
 }

function columns(block){
	 const html = block.value.map(item => col(p(item)))
	return  row(html.join(''))
 }

 export const templates = {
	 title,
	 text,
	 image,
	 columns
 }