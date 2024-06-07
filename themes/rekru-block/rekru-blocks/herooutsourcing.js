import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/herooutsourcing", {
    title: "Rekru Hero Outsourcing",
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
            <section className="hero hero--outsourcing outsourcing-background">
                <div className="subsection-container subsection-container--text">
                    <h1 className="section-title">
                        <RichText tagName="h1"  value={props.attributes.heading} onChange={setHeading} />
                        <picture className="shape shape--3">
                            <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-1.svg`}/>
                        </picture>
                    </h1>
                    <RichText tagName="p" className={"paragraph paragraph--medium"} value={props.attributes.textContent} onChange={setTextContent} />
                    <div className="button-container">
                        <a>
                            <button className="button button--hero">GO TO FORM</button>
                        </a>
                    </div>
                    <picture className="shape shape--0">
                        <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-0.svg`}/>
                    </picture>
                    <picture className="shape shape--4">
                        <img data-aos="fade-up-right" data-aos-duration="1000"
                             src={`${window.location.origin}/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-4.svg`}/>
                    </picture>
                </div>
                <div className="subsection-container subsection-container--img">
                    <picture className="hero-img">
                        <img data-aos="zoom-in" data-aos-duration="1000" src={props.attributes.imgURL}/>
                    </picture>
                    <picture className="shape shape--1">
                        <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-2.svg`}/>
                    </picture>
                    <picture className="shape shape--2">
                        <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-3.svg`}/>
                    </picture>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="hero hero--outsourcing outsourcing-background">
            <div className="subsection-container subsection-container--text">
                <h1 className="section-title">
                    {props.attributes.heading}
                    <picture className="shape shape--3">
                        <img data-aos="fade-down" data-aos-duration="1000"
                             src="/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-1.svg"/>
                    </picture>
                </h1>
                <p className="paragraph paragraph--medium">{props.attributes.textContent}</p>
                <div className="button-container">
                    <a>
                        <button className="button button--hero">GO TO FORM</button>
                    </a>
                </div>
                <picture className="shape shape--0">
                    <img data-aos="fade-down-right" data-aos-duration="1000"
                         src="/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-0.svg"/>
                </picture>
                <picture className="shape shape--4">
                    <img data-aos="fade-up-right" data-aos-duration="1000"
                         src="/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-4.svg"/>
                </picture>
            </div>
            <div className="subsection-container subsection-container--img">
                <picture className="hero-img">
                    <img data-aos="zoom-in" data-aos-duration="1000" src={props.attributes.imgURL}/>
                </picture>
                <picture className="shape shape--1">
                    <img data-aos="fade-right" data-aos-duration="1000" src="/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-2.svg"/>
                </picture>
                <picture className="shape shape--2">
                    <img data-aos="fade-left" data-aos-duration="1000" src="/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-3.svg"/>
                </picture>
            </div>
        </section>
    )
}