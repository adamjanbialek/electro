import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/herocontact", {
    title: "Rekru Hero Contact",
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
    function setHeading(newHeading) {
        props.setAttributes({heading: newHeading})
    }

    useEffect(function() {
        async function go() {
            const response = await apiFetch({
                path: `/wp/v2/media/${props.attributes.imgID}`,
                method: "GET"
            })
            props.setAttributes({imgURL: response['source_url']})
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
            <section className="hero hero--contact">
                <div className="content-container">
                    <h1 className="section-title">
                        <RichText tagName="div" className={"outsourcing-partial-title"} value={props.attributes.heading} onChange={setHeading} />
                    </h1>
                    <picture data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        <img src={props.attributes.imgURL} />
                    </picture>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="hero hero--contact">
            <div className="content-container">
                <h1 className="section-title">
                    <div className="outsourcing-partial-title" data-aos="zoom-out" data-aos-duration="1000"
                         data-aos-delay="200">{props.attributes.heading}
                    </div>
                </h1>
                <picture data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                    <img src={props.attributes.imgURL} />
                </picture>
            </div>
        </section>
    )
}