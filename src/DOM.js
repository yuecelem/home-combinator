export default function DOM (itemManager) {

    const body = document.querySelector('body');

    const createLayout = (() => {
        const content = document.createElement('div');
        content.classList.add('container');
        body.appendChild(content);

        const topbar = document.createElement('div');
        topbar.classList.add('topbar');
        content.appendChild(topbar);

        const panel = document.createElement('div');
        panel.classList.add('panel');
        content.appendChild(panel);

        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        panel.appendChild(sidebar);

        const mainpane = document.createElement('div');
        mainpane.classList.add('mainpane');
        panel.appendChild(mainpane);

    })();
    
    const createTopbarElements = (() => {
        const topbar = document.querySelector('.topbar');

        const header = document.createElement('h1');
        header.textContent = "Home Combinator"
        header.classList.add('header')
        topbar.appendChild(header)
        
    })();

    const createMainpaneToolbar = (() => {
        const mainpane = document.querySelector('.mainpane');

        const toolbar = document.createElement('div');
        toolbar.classList.add('toolbar');
        mainpane.appendChild(toolbar);
    })();

    const createMainpaneContent = (() => {
        const mainpane = document.querySelector('.mainpane');

        const content = document.createElement('div');
        content.classList.add('content');
        mainpane.appendChild(content);
    })();

    const createAddItemButton = (() => {
        const toolbar = document.querySelector('.toolbar');

        const addItemBtn = document.createElement('button');
        addItemBtn.classList.add('addItemBtn');
        toolbar.appendChild(addItemBtn)

        addItemBtn.textContent = 'Add Item'
    })();

    const createItemAddDialog = (() => {

        const addItemDialog = document.createElement('dialog');
        addItemDialog.classList.add('addItemDialog');

        const itemBrandLabel = document.createElement('label');
        const itemBrandInput = document.createElement('input');
        
        itemBrandInput.setAttribute('brand', 'input');
        itemBrandInput.classList.add('itemBrandInput');
        itemBrandLabel.setAttribute('for', 'input');
        itemBrandLabel.innerHTML = 'Item Brand:';

        const itemTypeLabel = document.createElement('label');
        const itemTypeInput = document.createElement('input');
        
        itemTypeInput.setAttribute('type', 'input');
        itemTypeInput.classList.add('itemTypeInput');

        itemTypeLabel.setAttribute('for', 'input');
        itemTypeLabel.innerHTML = 'Item Type:';

        const itemSectionLabel = document.createElement('label');
        const itemSectionInput = document.createElement('input');
        
        itemSectionInput.setAttribute('section', 'input');
        itemSectionInput.classList.add('itemSectionInput');

        itemSectionLabel.setAttribute('for', 'input');
        itemSectionLabel.innerHTML = 'Item Section:';

        const itemPriceLabel = document.createElement('label');
        const itemPriceInput = document.createElement('input');
        
        itemPriceInput.setAttribute('price', 'input');
        itemPriceInput.classList.add('itemPriceInput');

        itemPriceLabel.setAttribute('for', 'input');
        itemPriceLabel.innerHTML = 'Item Price:';

        const itemLinkLabel = document.createElement('label');
        const itemLinkInput = document.createElement('input');
        
        itemLinkInput.setAttribute('link', 'input');
        itemLinkInput.classList.add('itemLinkInput');

        itemLinkLabel.setAttribute('for', 'input');
        itemLinkLabel.innerHTML = 'Item Link:';
        

        const itemConfirmBtn = document.createElement('button');
        itemConfirmBtn.textContent = 'Add'
        itemConfirmBtn.classList.add('itemConfirmBtn');


        addItemDialog.appendChild(itemBrandLabel);
        addItemDialog.appendChild(itemBrandInput);

        addItemDialog.appendChild(itemTypeLabel);
        addItemDialog.appendChild(itemTypeInput);

        addItemDialog.appendChild(itemSectionLabel);
        addItemDialog.appendChild(itemSectionInput);

        addItemDialog.appendChild(itemPriceLabel);
        addItemDialog.appendChild(itemPriceInput);

        addItemDialog.appendChild(itemLinkLabel);
        addItemDialog.appendChild(itemLinkInput);

        addItemDialog.appendChild(itemConfirmBtn);
        
        body.appendChild(addItemDialog)

    })();

    const createSectionsBar = (() => {
        const sidebar = document.querySelector('.sidebar');

        const sectionsBar = document.createElement('div');
        sectionsBar.classList.add('sectionsBar');
        sidebar.appendChild(sectionsBar);

        const sectionsBarList = document.createElement('ul');
        sectionsBarList.classList.add('sectionsBarList');
        sidebar.appendChild(sectionsBarList);
    })();

    const createAddSectionsButton = (() => {
        const sidebar = document.querySelector('.sidebar');

        const addSectionsBtn = document.createElement('button');
        addSectionsBtn.classList.add('addSectionsBtn');
        sidebar.appendChild(addSectionsBtn)

        addSectionsBtn.textContent = 'Add New Section'
    })();

    const createAddSectionDialog = (function () {

        const addSectionDialog = document.createElement('dialog');
        const sectionNameLabel = document.createElement('label');
        const sectionNameInput = document.createElement('input');
        sectionNameInput.classList.add('sectionNameInput')

        const sectionConfirmBtn = document.createElement('button');
        sectionConfirmBtn.textContent = 'Confirm'
        sectionConfirmBtn.classList.add('sectionConfirmBtn')

        addSectionDialog.classList.add('addSectionDialog');

        sectionNameLabel.innerHTML = 'Enter Section Name:';
        sectionNameLabel.setAttribute('for', 'input');

        sectionNameInput.setAttribute('name', 'input');

        addSectionDialog.appendChild(sectionNameLabel);
        addSectionDialog.appendChild(sectionNameInput);
        addSectionDialog.appendChild(sectionConfirmBtn);

        body.appendChild(addSectionDialog);

    })();

    function renderSections () {
        const sectionsBarList = document.querySelector('.sectionsBarList');
        clearSections()
        
        itemManager.sectionList.forEach((section) => {
            const newSection = document.createElement('li');
            newSection.textContent = section.name;
            sectionsBarList.appendChild(newSection)
            sectionsBarList.appendChild(createSectionDeleteBtn(section.name))

        })
    }

    function clearSections () {
        const sectionsBarList = document.querySelector('.sectionsBarList');

        sectionsBarList.innerHTML = '';
    }

    function createSectionDeleteBtn (sectionName) {
        const sectionDeleteBtn = document.createElement('button');
        sectionDeleteBtn.classList.add('sectionDeleteBtn');
        sectionDeleteBtn.setAttribute('sectionName', sectionName);
        sectionDeleteBtn.textContent = 'Remove';
        return sectionDeleteBtn;
    }


    function renderItems () {
        const content = document.querySelector('.content');
        clearItems()
        //plug in filter for section
        itemManager.itemList.forEach((item) => {

            const itemLine = document.createElement('div');
            itemLine.classList.add('itemLine');

            const itemBrand = document.createElement('div');
            itemBrand.classList.add('itemBrand')
            itemBrand.innerHTML = item.brand;

            const itemType = document.createElement('div');
            itemType.classList.add('itemType');
            itemType.innerHTML = item.itemType;

            const assignedSectionName = document.createElement('div');
            assignedSectionName.classList.add('assignedSectionName');
            assignedSectionName.innerHTML = item.assignedSectionName;

            const itemPrice = document.createElement('div');
            itemPrice.classList.add('itemPrice')
            itemPrice.innerHTML = item.price;

            itemLine.appendChild(itemBrand);
            itemLine.appendChild(itemType);
            itemLine.appendChild(assignedSectionName);
            itemLine.appendChild(itemPrice);

            content.appendChild(itemLine);
        })
    }
    
    function clearItems () {
        const content = document.querySelector('.content').innerHTML = '';
    }

    
    // SECTION EVENT HANDLERS  
    
    const sectionEventHandlers = (function () {
        const addSectionsBtn = document.querySelector('.addSectionsBtn')
        const addSectionDialog = document.querySelector('.addSectionDialog')
        const sectionConfirmBtn = document.querySelector('.sectionConfirmBtn')
        const sectionNameInput = document.querySelector('.sectionNameInput')
        const sectionDeleteBtnGroup = document.getElementsByClassName('sectionDeleteBtn');

        console.log(sectionDeleteBtnGroup)
        addSectionsBtn.addEventListener('click', () => {
            addSectionDialog.showModal();
        })

        sectionConfirmBtn.addEventListener("click", (e) => {
            e.preventDefault();
            itemManager.createNewSection(sectionNameInput.value)
            addSectionDialog.close()
            renderSections();
            sectionNameInput.value = '';
        })

        // sectionDeleteBtnGroup.forEach((e) => {
        //     e.preventDefault();
            
        //     e.addEventListener('click', () => {
        //         console.log(e)
        //     })
        // })
        

        

    })();
 

    // ITEM EVENT HANDLERS  
    
    const itemEventHandlers = (() => {
        const addItemBtn = document.querySelector('.addItemBtn');
        const itemConfirmBtn = document.querySelector('.itemConfirmBtn')
        const itemBrandInput = document.querySelector('.itemBrandInput')
        const itemTypeInput = document.querySelector('.itemTypeInput')
        const itemSectionInput = document.querySelector('.itemSectionInput')
        const itemPriceInput = document.querySelector('.itemPriceInput')
        const itemLinkInput = document.querySelector('.itemLinkInput')
        const addItemDialog = document.querySelector('.addItemDialog')

        addItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
    
            itemBrandInput.value = '';
            itemTypeInput.value = '';
            itemSectionInput.value = '';
            itemPriceInput.value = '';
            itemLinkInput.value = '';
    
            addItemDialog.showModal()
        })

        itemConfirmBtn.addEventListener("click", (e) => {
            e.preventDefault();
    
            itemManager.createNewItem(
                itemBrandInput.value,
                itemTypeInput.value,
                itemSectionInput.value,
                itemPriceInput.value,
                itemLinkInput.value
            )
            renderItems();
            addItemDialog.close();
        })


    })();

    

    




    renderSections()
    renderItems()
}