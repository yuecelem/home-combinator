import Item from "./item.js" 

export default class ItemManager {
    constructor () {
        this.itemList = [];
    }

    creatNewItem (brand, itemType, assignedSectionName, price, link) {
        const newItem = new Item(brand, itemType, assignedSectionName, price, link);

        newItem.setItemId(this.itemList.length + 1)
        this.itemList.push(newItem)
    }


    removeItemFromList (removeId) {
        let itemIndex = 0;
        // find the list index of the item to be removed
        this.itemList.forEach((item) => {
            if ( item.id === removeId ) {
                itemIndex = this.itemList.indexOf(item);
                return
            }
        }) 
        this.itemList.splice(itemIndex, 1);
    }   
}