import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/hero", {
    title: "Rekru Hero",
    attributes: {
        subtitle: {type: "string"},
        heading: {type: "string"},
        textContent: {type: "string"},
        imgID: {type: "number"},
        imgURL: {type: "string"}
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

    useEffect(function() {
        async function go() {
            const response = await apiFetch({
                path: `/wp/v2/media/${props.attributes.imgID}`,
                method: "GET"
            })
            props.setAttributes({imgURL: response.media_details.sizes.hero.source_url})
        }
        go()
    }, [props.attributes.imgID])

    function onFileSelect(newImage) {
        props.setAttributes({imgID: newImage.id})
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Image" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect}
                                value={props.attributes.imgID}
                                render={({open}) => {
                                    return <Button onClick={open}>Choose Image</Button>
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <section className="hero hero--main">
                <div className="subsection-container subsection-container--text">
                    <picture data-aos="fade-down">
                        <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/electro/logo.png`} />
                    </picture>
                    <RichText tagName="span" className={"subtitle"} value={props.attributes.subtitle} onChange={setSubtitle} />
                    <RichText tagName="h1" className={"section-title colorful-title"} value={props.attributes.heading} onChange={setHeading} />
                    <RichText className="paragraph paragraph--extra-large" data-aos="fade-right" data-aos-delay="600" value={props.attributes.textContent} onChange={setTextContent} />
                
                </div>
                <div className="subsection-container image-with-background image-with-background--main">
                    <div className="gradient-box" data-aos="fade-up" data-aos-delay="500" />
                    <picture className="main-image" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                        <img src={props.attributes.imgURL} />
                    </picture>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="hero hero--main">
            <div className="subsection-container subsection-container--text">
                <picture data-aos="fade-down">
                    <img src="/wp-content/themes/rekru-block/assets/electro/logo.png" />
                </picture>
                <span className="subtitle" data-aos="fade-right" data-aos-delay="200">{props.attributes.subtitle}</span>
                <h1 className="section-title colorful-title" data-aos="fade-right" data-aos-delay="200">{props.attributes.heading}</h1>
                <p className="paragraph paragraph--extra-large" data-aos="fade-right" data-aos-delay="600">{props.attributes.textContent}</p>
                
            </div>
            <div className="subsection-container image-with-background image-with-background--main">
                <div className="gradient-box" data-aos="fade-up" data-aos-delay="500" />
                <picture className="main-image" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                    <img src={props.attributes.imgURL} />
                </picture>
            </div>
        </section>
    )
}