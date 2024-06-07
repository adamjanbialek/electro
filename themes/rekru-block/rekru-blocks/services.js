wp.blocks.registerBlockType("rekrublocktheme/services", {
    title: "Rekru Services",
    edit: function () {
        return wp.element.createElement("div", {className: "generic-list-block"}, "List of services")
    },
    save: function () {
        return null;
    }
})