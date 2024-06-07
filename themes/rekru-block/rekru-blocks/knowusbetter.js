import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/knowusbetter", {
    title: "Rekru Know Us Better",
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
            <section className="hero hero--know-us-better">
                <div className="subsections-container">
                    <div className="subsection-container subsection-container--text">
                        <RichText tagName="h2" className={"section-title section-title--medium"} value={props.attributes.heading} onChange={setHeading} />
                        <div className="form-section">
                            <div className="form-container">
                                <div className="form-subcontainer">
                                    <input type="text" placeholder="Enter your Name" className="form-input" required />
                                    <input type="email" placeholder="Enter Your Mail" className="form-input" required />
                                    <input type="text" placeholder="Enter Your Topic" className="form-input" required />
                                    <input type="text" placeholder="Enter Your Massage" className="form-input" required />
                                    <button className="button button--hero">Send Massage</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subsection-container">
                        <RichText tagName="p" className="paragraph paragraph--small" data-aos="fade-right" data-aos-delay="600" value={props.attributes.textContent} onChange={setTextContent} />
                        <div
                            className="subsection-container image-with-background image-with-background--know-us-better">
                            <picture className="gradient-box" data-aos="fade-up-left" data-aos-delay="400">
                                <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/know-us-better/gradient.jpg`} />
                            </picture>
                            <picture className="main-image" data-aos="zoom-in">
                                <img src={props.attributes.imgURL} />
                            </picture>
                            <picture className="optional-image" data-aos="fade-down-right" data-aos-delay="400">
                                <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/know-us-better/dots.png`} />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="hero hero--know-us-better">
            <div className="subsections-container">
                <div className="subsection-container subsection-container--text">
                    <h2 className="section-title section-title--medium">{props.attributes.heading}</h2>
                    <div className="form-section">
                        <div className="form-container">
                            <div className="form-subcontainer">
                                <input type="text" placeholder="Enter your Name" className="form-input" required />
                                <input type="email" placeholder="Enter Your Mail" className="form-input" required />
                                <input type="text" placeholder="Enter Your Topic" className="form-input" required />
                                <input type="text" placeholder="Enter Your Massage" className="form-input" required />
                                <button className="button button--hero">Send Massage</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subsection-container">
                    <p className="paragraph paragraph--small">{props.attributes.textContent}</p>
                    <div className="subsection-container image-with-background image-with-background--know-us-better">
                        <picture className="gradient-box" data-aos="fade-up-left" data-aos-delay="400">
                            <img src="assets/know-us-better/gradient.jpg"/>
                        </picture>
                        <picture className="main-image" data-aos="zoom-in">
                            <img src={props.attributes.imgURL}/>
                        </picture>
                        <picture className="optional-image" data-aos="fade-down-right" data-aos-delay="400">
                            <img src="assets/know-us-better/dots.png"/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}