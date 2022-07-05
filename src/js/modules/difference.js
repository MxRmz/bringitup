export default class Difference {
        
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        try {this.oldItems = this.oldOfficer.querySelectorAll(items);} catch(e) {}
        try {this.newItems = this.newOfficer.querySelectorAll(items);} catch(e) {}
        this.oldCounter = 0;
        this.newCounter = 0;
    }
    

    bindTriggers(container, items, counter) {
        if (container) {
        container.querySelector('.plus').addEventListener('click', () => {
            console.log(container.querySelector('.plus'));
            if (counter >= items.length - 2) {
                items[items.length - 1].style.display = 'none';
            }

            items[counter].style.display = 'flex';
            counter += 1;

        });
    }
    }



    hideItems(items) {
        try {
            items.forEach((item, i, arr) => {
                if (i !== arr.length - 1) {
                    item.style.display = 'none';
                }
            });
        } catch(e) {}

    }

    init() {
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        this.hideItems(this.newItems);
        this.hideItems(this.oldItems);
        this.bindTriggers();
        
    }

}