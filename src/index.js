import Item from "./item.js"
import Section from "./section.js"
import ItemManager from "./item-manager.js"
import DOM from "./DOM.js"
import './styles.css'

const itemManager = new ItemManager('Section 1')
itemManager.createNewSection('Section 2')
itemManager.createNewSection('Section 3')
itemManager.createNewSection('Section 4')

itemManager.createNewItem('İkea', 'Sofa', 'Section 1', '1500 TL' )
itemManager.createNewItem('Yatsan', 'Yatak', 'Section 2', '8500 TL' )
itemManager.createNewItem('Yataş', 'Yatak', 'Section 2', '12000 TL' )


DOM(itemManager)

console.log(itemManager)