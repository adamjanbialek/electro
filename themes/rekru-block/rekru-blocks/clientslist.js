import {RichText } from "@wordpress/block-editor";

wp.blocks.registerBlockType("rekrublocktheme/clientslist", {
    title: "Rekru Clients List",
    attributes: {
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

    function setTextContent(newTextContent) {
        props.setAttributes({textContent: newTextContent})
    }

    return (
        <>
            <section className="cards-container cards-container--in-touch cards-container--our-clients">
                    <RichText tagName="h2" className={"section-title section-title--small"} value={props.attributes.heading} onChange={setHeading} />
                    <RichText className="paragraph paragraph--extra-large" data-aos="fade-right" data-aos-delay="600" value={props.attributes.textContent} onChange={setTextContent} />
                <div className="cards-slider swiper--our-clients">
                    <div className="button--swiper">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                    <div className={"generic-list-block"} >List of clients</div>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <>
                <h2 className="section-title section-title--small" data-aos="fade-left" data-aos-duration="1000">{props.attributes.heading}</h2>
                <p className="paragraph paragraph--extra-large" data-aos="fade-right" data-aos-delay="1000">{props.attributes.textContent}</p>
        </>
    )
}