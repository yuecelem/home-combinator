import Item from "./item.js"
import Section from "./section.js"
import ItemManager from "./item-manager.js"
import DOM from "./DOM.js"
import './styles.css'

const itemManager = new ItemManager('Section 1')
itemManager.createNewSection('Section 2')
itemManager.createNewSection('Section 3')
itemManager.createNewSection('Section 4')

DOM(itemManager)

console.log(itemManager)