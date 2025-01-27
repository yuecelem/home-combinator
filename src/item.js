export default class Item{
    constructor(brand, itemType, assignedSectionName, price, link) {
        this.id;
        this.brand = brand;
        this.itemType = itemType;
        this.assignedSectionName = assignedSectionName;
        this.price = price;
        this.link = link;
    }

    setId (itemId) {
        this.id = itemId;
    }
    changeBrand (newBrand) {
        this.brand = newBrand;
    }

    changeType (newItemType) {
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

