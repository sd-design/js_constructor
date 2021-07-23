export function row(content){
	 return `<div class="row">${content}</div>`
}

export function col(content, styles=''){
	 return `<div class="col-sm ${styles}">${content}</div>`
}

export function p(content){
	 return `<p>${content}</p>`
}

export function img(content, styles='', alt =''){
	 return `<img src ="${content}" class="${styles}" alt="${alt}" />`
}
