import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/ridewave", {
    title: "Rekru Ride Wave",
    attributes: {
        subtitle: {type: "string"},
        heading: {type: "string"},
        textContent1: {type: "string"},
        textContent2: {type: "string"},
        imgID1: {type: "number"},
        imgURL1: {type: "string"},
        imgID2: {type: "number"},
        imgURL2: {type: "string"}
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

    function setTextContent1(newTextContent1) {
        props.setAttributes({textContent1: newTextContent1})
    }

    function setTextContent2(newTextContent2) {
        props.setAttributes({textContent2: newTextContent2})
    }

    useEffect(function() {
        async function go() {
            const response = await apiFetch({
                path: `/wp/v2/media/${props.attributes.imgID1}`,
                method: "GET"
            })
            props.setAttributes({imgURL1: response.media_details.sizes.hero.source_url})
        }
        go()
    }, [props.attributes.imgID1])

    useEffect(function() {
        async function go() {
            const response = await apiFetch({
                path: `/wp/v2/media/${props.attributes.imgID2}`,
                method: "GET"
            })
            props.setAttributes({imgURL2: response.media_details.sizes.hero.source_url})
        }
        go()
    }, [props.attributes.imgID2])

    function onFileSelect1(newImage1) {
        props.setAttributes({imgID1: newImage1.id})
    }

    function onFileSelect2(newImage2) {
        props.setAttributes({imgID2: newImage2.id})
    }

    return (

        <>
            <InspectorControls>
                <PanelBody title="Image1" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect1}
                                value={props.attributes.imgID1}
                                render={({open}) => {
                                    return <Button onClick={open}>Choose Image</Button>
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <InspectorControls>
                <PanelBody title="Image2" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect2}
                                value={props.attributes.imgID2}
                                render={({open}) => {
                                    return <Button onClick={open}>Choose Image</Button>
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <section className="hero hero--ride-wave">
                <div className="subsection-container image-with-background image-with-background--ride-wave">
                    <div className="gradient-box" data-aos="fade-left" data-aos-delay="200" />
                    <picture className="main-image" data-aos="fade-up" data-aos-delay="200">
                        <img src={props.attributes.imgURL1} />
                    </picture>
                    <picture className="optional-image">
                        <img src={props.attributes.imgURL2} />
                    </picture>
                </div>
                <div className="subsection-container subsection-container--text">
                    <RichText tagName="span" className="subtitle subtitle--arrow" data-aos="fade-left" value={props.attributes.subtitle} onChange={setSubtitle} />
                    <RichText tagName="h2" className="section-title" data-aos="fade-right" data-aos-delay="200" value={props.attributes.heading} onChange={setHeading} />
                    <RichText tagName="p" className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="400" value={props.attributes.textContent1} onChange={setTextContent1} />
                    <RichText tagName="p" className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="600" value={props.attributes.textContent2} onChange={setTextContent2} />
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="hero hero--ride-wave">
            <div className="subsection-container image-with-background image-with-background--ride-wave">
                <div className="gradient-box" data-aos="fade-left" data-aos-delay="200" />
                <picture className="main-image" data-aos="fade-up" data-aos-delay="200">
                    <img src={props.attributes.imgURL1} />
                </picture>
                <picture className="optional-image">
                    <img src={props.attributes.imgURL2} />
                </picture>
            </div>
            <div className="subsection-container subsection-container--text">
                <span className="subtitle subtitle--arrow" data-aos="fade-left">{props.attributes.subtitle}</span>
                <h2 className="section-title" data-aos="fade-right" data-aos-delay="200">{props.attributes.heading}</h2>
                <p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="400">{props.attributes.textContent1}</p>
                <p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="600">{props.attributes.textContent2}</p>
            </div>
        </section>
    )
}