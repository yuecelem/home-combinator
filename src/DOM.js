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

    function renderSections () {
        const sectionsBarList = document.querySelector('.sectionsBarList');
        clearSections()
        itemManager.sectionList.forEach((section) => {
            const newSection = document.createElement('li');
            newSection.textContent = section.name;
            sectionsBarList.appendChild(newSection)
        })
    }

    renderSections()

    function clearSections () {
        const sectionsBarList = document.querySelector('.sectionsBarList');

        sectionsBarList.innerHTML = '';
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
            itemPrice.innerHTML = item.itemPrice;

            itemLine.appendChild(itemBrand);
            itemLine.appendChild(itemType);
            itemLine.appendChild(assignedSectionName);
            itemLine.appendChild(itemPrice);

            content.appendChild(itemLine);
        })
    }
    renderItems()

    function clearItems () {
        const content = document.querySelector('.content').innerHTML = '';
    }

    
}