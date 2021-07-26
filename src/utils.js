export function row(content){
	 return `<div class="row">${content}</div>`
}

export function col(content, styles=''){
	 return `<div class="col-sm ${styles}">${content}</div>`
}

export function p(content, styles=''){
	 return `<p class="${styles}">${content}</p>`
}

export function img(content, styles='', alt =''){
	 return `<img src ="${content}" class="${styles}" alt="${alt}" />`
}


export function block(type) {
	return `
	<form name= "${type}">
	<h5>${type}</h5>
	<div class="form-group">
	<input class="form-control form-control-sm" name="value" placeholder="value">
	</div>
	<div class="form-group mt-2 mb-2">
	<input class="form-control form-control-sm" name="styles" placeholder="styles">
	</div>
	<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
	</form>
	<hr />
	`
	
}
