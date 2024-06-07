wp.blocks.registerBlockType("rekrublocktheme/servicesbottom", {
    title: "Rekru Services Bottom",
    edit: function () {
        return wp.element.createElement("div", {className: "generic-list-block"}, "List of services bottom")
    },
    save: function () {
        return null;
    }
})