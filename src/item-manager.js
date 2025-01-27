import Item from "./item.js"
import Section from "./section.js"  

export default class ItemManager {
    constructor (section1) {
        this.itemList = [];
        this.sectionList = [section1];
    }

    findItemIndexbyId (id) {
        let itemIndex = false;
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
        console.log(itemIndex)
        if (itemIndex !== false){
            this.itemList.splice(itemIndex, 1);
        }
    }   

    changeItemBrand (id, newBrand) {
        const item = this.itemList[this.findItemIndexbyId(id)];
        item.changeBrand(newBrand);
    }

    changeItemType (id, newType) {
        const item = this.itemList[this.findItemIndexbyId(id)];
        item.changeType(newType);
    }

    changeItemAssignedSectionName (id, newSection) {
        const item = this.itemList[this.findItemIndexbyId(id)];
        item.changeAssignedSectionName(newSection);
    }

    changeItemPrice (id, newPrice) {
        const item = this.itemList[this.findItemIndexbyId(id)];
        item.changePrice(newPrice);
    }

    changeItemLink (id, newLink) {
        const item = this.itemList[this.findItemIndexbyId(id)];
        item.changeLink(newLink);
    }

    createNewSection (name) {
        const newSection = new Section(name);
        this.sectionList.push(newSection)
    }

    removeSection (name) {
        this.sectionList.splice(this.sectionList.indexOf(this.sectionList.find((section) => section.name === name)), 1)
    }

    changeSectionName (sectionName, newName) {
        const section = this.sectionList.find((section) => section.name === sectionName);
        section.changeName(newName);
    }
}