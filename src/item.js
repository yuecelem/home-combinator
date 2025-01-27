export default class Item{
    constructor(id, brand, itemType, assignedSectionName, price, link) {
        this.id = id;
        this.brand = brand;
        this.itemType = itemType;
        this.assignedSectionName = assignedSectionName;
        this.price = price;
        this.link = link;
    }

    changeItemBrand (newBrand) {
        this.brand = newBrand;
    }

    changeItemType (newItemType) {
        this.itemType = newItemType;
    }

    changeAssignedSectionName (newAssignedSectionName) {
        this.assignedSectionName = newAssignedSectionName;
    }

    changePrice (newPrice) {
        this.price = newPrice;
    }

    changeLink (newLink) {
        this.link = newLink;
    }
};

