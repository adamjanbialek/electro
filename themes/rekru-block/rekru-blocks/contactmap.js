import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";


wp.blocks.registerBlockType("rekrublocktheme/contactmap", {
    title: "Rekru Contact Map",
    attributes: {
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
            <section className="form-section">
                <picture data-aos="zoom-out" data-aos-duration="800">
                    <img src={props.attributes.imgURL}/>
                </picture>
                <div className="form-container">
                    <RichText tagName="h2" className={"section-title section-title--medium"} value={props.attributes.heading} onChange={setHeading} />
                    <div className="form-subcontainer">
                        <input type="text" placeholder="Enter your Name" className="form-input" required/>
                        <input type="email" placeholder="Enter Your Mail" className="form-input" required/>
                        <input type="text" placeholder="Enter Your Topic" className="form-input" required/>
                        <input type="text" placeholder="Enter Your Massage" className="form-input" required/>
                        <button className="button button--contact">Send Massage</button>
                    </div>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="form-section">
            <picture data-aos="zoom-out" data-aos-duration="800">
                <img src={props.attributes.imgURL}/>
            </picture>
            <div className="form-container">
                <h2 className="section-title section-title--medium">{props.attributes.heading}</h2>
                <div className="form-subcontainer">
                    <input type="text" placeholder="Enter your Name" className="form-input" required/>
                    <input type="email" placeholder="Enter Your Mail" className="form-input" required/>
                    <input type="text" placeholder="Enter Your Topic" className="form-input" required/>
                    <input type="text" placeholder="Enter Your Massage" className="form-input" required/>
                    <button className="button button--contact">Send Massage</button>
                </div>
            </div>
        </section>
    )
}