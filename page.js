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