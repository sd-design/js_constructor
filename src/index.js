 console.log('%c Constructor is running', 'background: #222; color: #bada55; padding:15px')
import {model} from './model'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'

import './css/main.css'


const site = new Site('#site')

site.render(model)
//console.log(templates['title']({type: 'title', value: 'Hi Constructor on JS!'}))

const sidebar = new Sidebar('#panel')