 import {row, col, p, img} from '../utils'

 
class Block {
constructor(value, options){
	this.value = value
	this.options = options
}

toHTML(){
	throw new Error('Метод toHTML должен быть реализованным')
}
}

export class TitleBlock extends Block {
	constructor(value, options){
		super(value, options)
	}

	toHTML(){
		const {tag = 'h1', styles} = this.options
		return row(col(`<${tag} class="${styles}">${this.value}</${tag}>`))
	}
}

export class TextBlock extends Block {
	constructor(value, options){
		super(value, options)
	}

	toHTML(){
		const {styles} = this.options
		return row(col(p(this.value, styles)))
	}
}

export class ColumnsBlock extends Block {
	constructor(value, options){
		super(value, options)
	}

	toHTML(){
	const html = this.value.map(item => col(p(item)))
	return  row(html.join(''))
	}
}

export class ImageBlock extends Block {
	constructor(value, options){
		super(value, options)
	} 

	toHTML(){
	const {styles, alt= ''} = this.options
	return row(col(img(this.value, styles, alt)))
	}
}