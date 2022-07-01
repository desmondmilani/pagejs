let container = TagCreator.getTag("container");

let wrapper = TagCreator.createEmptyTag("wrapper", "div");

container.appendChild(wrapper);

wrapper.appendChild(TagCreator.createH1("", "Hello World"));