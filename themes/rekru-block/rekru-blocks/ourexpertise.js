import {RichText } from "@wordpress/block-editor";

wp.blocks.registerBlockType("rekrublocktheme/ourexpertise", {
    title: "Rekru Our Expertise",
    attributes: {
        subtitle: {type: "string"},
        heading: {type: "string"},
        textContent: {type: "string"},
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    function setSubtitle(newSubtitle) {
        props.setAttributes({subtitle: newSubtitle})
    }

    function setHeading(newHeading) {
        props.setAttributes({heading: newHeading})
    }

    function setTextContent(newTextContent) {
        props.setAttributes({textContent: newTextContent})
    }

    return (
        <>
            <section className="list-elements list-elements--our-wave">
                <RichText tagName="h3" className={"section-title section-title--small"} value={props.attributes.subtitle} onChange={setSubtitle}/>
                <RichText tagName="p" className={"paragraph paragraph--medium"} value={props.attributes.textContent} onChange={setTextContent}/>
                <RichText tagName="h2" className={"section-title"} value={props.attributes.heading} onChange={setHeading}/>
                <div className={"generic-list-block"} >List of processes</div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <>
            <h3 className="section-title section-title--small">{props.attributes.subtitle}</h3>
            <p className="paragraph paragraph--medium">{props.attributes.textContent}</p>
            <h2 className="section-title">{props.attributes.heading}</h2>
        </>
    )
}