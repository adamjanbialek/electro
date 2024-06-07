import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/ourclients", {
    title: "Rekru Our Clients",
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
            <section className="hero hero--our-clients">
                <div className="subsection-container image-with-background image-with-background--our-clients">
                    <div className="gradient-box" data-aos="fade-left" data-aos-delay="200"/>
                    <picture className="main-image">
                        <img src={props.attributes.imgURL}/>
                    </picture>
                    <picture className="optional-image">
                        <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/our-clients/dots.png`}/>
                    </picture>
                </div>
                <div className="subsection-container subsection-container--text">
                    <RichText tagName="h2" className={"section-title"} data-aos="fade-right" data-aos-delay="200" value={props.attributes.heading} onChange={setHeading} />
                    <ul>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-down">An extensive database of proficient IT
                            consultants is at your disposal.</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-down" data-aos-delay="200">We implement
                            solutions designed to cut costs without compromising on quality.</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-down" data-aos-delay="400">Our cooperation
                            models are adaptable, personalized to your particular requirements.</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-down" data-aos-delay="600">We pride ourselves
                            on our efficient workflows and simplified processes.</p></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="hero hero--our-clients">
            <div className="subsection-container image-with-background image-with-background--our-clients">
                <div className="gradient-box" data-aos="fade-left" data-aos-delay="200"/>
                <picture className="main-image">
                    <img src={props.attributes.imgURL}/>
                </picture>
                <picture className="optional-image">
                    <img src="/wp-content/themes/rekru-block/assets/our-clients/dots.png"/>
                </picture>
            </div>
            <div className="subsection-container subsection-container--text">
                <h2 className="section-title" data-aos="fade-right" data-aos-delay="200">{props.attributes.heading}</h2>
                <ul>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-down">An extensive database of proficient IT
                        consultants is at your disposal.</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-down" data-aos-delay="200">We implement
                        solutions designed to cut costs without compromising on quality.</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-down" data-aos-delay="400">Our cooperation
                        models are adaptable, personalized to your particular requirements.</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-down" data-aos-delay="600">We pride ourselves
                        on our efficient workflows and simplified processes.</p></li>
                </ul>
            </div>
        </section>
    )
}