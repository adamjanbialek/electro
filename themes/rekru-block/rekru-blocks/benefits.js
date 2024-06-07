import {RichText } from "@wordpress/block-editor";

wp.blocks.registerBlockType("rekrublocktheme/benefits", {
    title: "Rekru Benefits",
    attributes: {
        subtitle: {type: "string"},
        heading: {type: "string"},
        textContent: {type: "string"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    function setHeading(newHeading) {
        props.setAttributes({heading: newHeading})
    }

    return (
        <>
            <section className="list-elements list-elements--outsourcing outsourcing-background">
                <RichText tagName="h2" className={"section-title section-title--small"} value={props.attributes.heading} onChange={setHeading}/>
                <div className={"generic-list-block"} >List of benefits</div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <>
            <h2 className="section-title section-title--small">{props.attributes.heading}</h2>
        </>
    )
}