import Item from "./item.js" 

export default class ItemManager {
    constructor () {
        this.itemList = [];
    }

    findItemIndexbyId (id) {
        let itemIndex = 0;
        // find the list index of the item to be removed
        this.itemList.forEach((item) => {
            if ( item.id === id ) {
                itemIndex = this.itemList.indexOf(item);
            }
        }) 
        return itemIndex
    }

    createNewItem (brand, itemType, assignedSectionName, price, link) {
        const newItem = new Item(brand, itemType, assignedSectionName, price, link);

        newItem.setId(this.itemList.length + 1)
        this.itemList.push(newItem)
    }


    removeItemFromList (removeId) {
        const itemIndex = this.findItemIndexbyId(removeId);
        this.itemList.splice(itemIndex, 1);
    }   

    // changeItemBrand (id, newBrand) {
    //     const item = this.itemList.
    // }
}