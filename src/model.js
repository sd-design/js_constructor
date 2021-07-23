 import image from './assets/image.jpg'
 import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

 export const model = [
	 new TitleBlock('Конструктор сайтов на JS!', {
		 tag: 'h2',
		 styles: 'text-center text-white bg-info bg-gradient'
	 }),
	 new TextBlock('Some text'),
	new ColumnsBlock(['Row 1111111111111111Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero omnis reprehenderit enim numquam adipisci corrupti nesciunt deleniti soluta rem, provident eaque deserunt sit officia. Ipsum libero corrupti voluptatibus commodi reiciendis!', 'Row 22222', 'Row 333333 fdsfdsf', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero omnis reprehenderit enim numquam adipisci corrupti nesciunt deleniti soluta rem, provident eaque deserunt sit officia. Ipsum libero corrupti voluptatibus commodi reiciendis!', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero omnis reprehenderit enim numquam adipisci corrupti nesciunt deleniti soluta rem, provident eaque deserunt sit officia. Ipsum libero corrupti voluptatibus commodi reiciendis!']),
	new ImageBlock(image, {
		 styles: 'rounded mx-auto d-block',
		 alt: 'Hello constructor'
	 })
 ]