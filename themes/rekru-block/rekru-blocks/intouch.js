import {RichText } from "@wordpress/block-editor";

wp.blocks.registerBlockType("rekrublocktheme/intouch", {
    title: "Rekru Intouch",
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
            <section className="cards-container cards-container--in-touch">
                <RichText tagName="h2" className="section-title section-title--medium colorful-title" data-aos="fade-down" value={props.attributes.subtitle} onChange={setSubtitle}/>
                <RichText tagName="h2" className="section-title section-title--medium" data-aos="fade-down" data-aos-delay="200" value={props.attributes.heading} onChange={setHeading}/>
                <RichText tagName="p" className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="400" value={props.attributes.textContent} onChange={setTextContent}/>
                <div className={"generic-list-block"} >List of contacts</div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <>
            <h2 className="section-title section-title--medium colorful-title" data-aos="fade-down">{props.attributes.subtitle}</h2>
            <h2 className="section-title section-title--medium" data-aos="fade-down" data-aos-delay="200">{props.attributes.heading}</h2>
            <p className="paragraph paragraph--large"  data-aos="fade-down" data-aos-delay="400">{props.attributes.textContent}</p>
        </>
    )
}