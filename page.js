////  a class to help create tags by Desmond Milani 2022 June
class TagCreator {
    //function to create an empty tag
    static createEmptyTag = (id, tagType) => {
        let tag = document.createElement(tagType)
        tag.id = id;
        return tag;
    } 

    //function to create tag with text
    static createTagWithText = (id, tagType, text) => {
        let tag = this.createEmptyTag(id, tagType);
        let textNode = document.createTextNode(text);
        tag.appendChild(textNode);
        return tag;
    }

    //function to select a tag with an id
    static getTag = id => {
        let tag = document.getElementById(id);
        return tag;
    }

    //function to get value from input
    static getInputValue = (id) => {
        let value = document.getElementById(id).value;
        return value;
    }

    //function to render one tag to another
    static render = (childId, parentId) => {
        this.getTag(parentId).appendChild(this.getTag(childId));
    }

    //function to create h1
    static createH1 = (id, text) => {
        let tag = this.createTagWithText(id, "h1", text);
        return tag;
    }

    //function to create h2
    static createH2 = (id, text) => {
        let tag = this.createTagWithText(id, "h2", text);
        return tag;
    }

    //function to create h3
    static createH3 = (id, text) => {
        let tag = this.createTagWithText(id, "h3", text);
        return tag;
    }

    //function to create h4
    static createH4 = (id, text) => {
        let tag = this.createTagWithText(id, "h4", text);
        return tag;
    }

    //function to create h5
    static createH5 = (id, text) => {
        let tag = this.createTagWithText(id, "h5", text);
        return tag;
    }

    //function to create h6
    static createH6 = (id, text) => {
        let tag = this.createTagWithText(id, "h6", text);
        return tag;
    }

}


//////////////////////helper functions for web processes by desmond 2022 July//////////////////////////
//function to switch between pages
const switchPage = (pageId, pageIds, displayType) => {
    let i = 0;
    let length = pageIds.length;

    for (i; i < length; i++) {
        if (pageIds[i] === pageId) {
            TagCreator.getTag(pageIds[i]).style.display = displayType;
        } else {
            TagCreator.getTag(pageIds[i]).style.display = "none";
        }
    }
}

//function to display page as grid
const switchPageGrid = (pageId, pageIds) => {
    switchPage(pageId, pageIds, "grid");
}

//function to display page as flex
const switchPageFlex = (pageId, pageIds) => {
    switchPage(pageId, pageIds, "flex");
}

//function to display page as block
const switchPageBlock = (pageId, pageIds) => {
    switchPage(pageId, pageIds, "block");
}

//function to display page as inline-block
const switchPageInlineBlock = (pageId, pageIds) => {
    switchPage(pageId, pageIds, "inline-block");
}

//function to display page as inline
const switchPageInline = (pageId, pageIds) => {
    switchPage(pageId, pageIds, "inline");
}

//function to create a header with just img, heading and slogan
const createHeader = (id, imagePath, heading, slogan) => {
    let header = TagCreator.createEmptyTag(id, "header");
    let img = TagCreator.createEmptyTag(id + "-img", "img");
    img.src = imagePath;
    let h1 = TagCreator.createH1(id +"-heading", heading);
    let h2 = TagCreator.createH2(id+"-slogan", slogan);

    let hgroup = TagCreator.createEmptyTag(id+"-hgroup", "hgroup");
    hgroup.appendChild(h1);
    hgroup.appendChild(h2);

    header.appendChild(img);
    header.appendChild(hgroup);

    return header;
}

//class for pages and the links
class PageLink {
    constructor(title, link) {
        this.title = title;
        this.link = link;
    }
}

//function to create a navigation bar
const createNav = (id, pageLinks) => {
    let nav = TagCreator.createEmptyTag(id, "nav");

    let i = 0;
    let length = pageLinks.length;

    for (i; i < length; i++) {
        let navItem = TagCreator.createTagWithText(id+"-" + i, "a", pageLinks[i].title);
        navItem.href = pageLinks[i].link;
        nav.appendChild(navItem);
    }

    return nav;
}

