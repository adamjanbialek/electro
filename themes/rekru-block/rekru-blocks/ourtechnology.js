import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/ourtechnology", {
    title: "Rekru Our Technology",
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
            <section className="hero hero--tech-stack">
                <div className="text-container">
                    <RichText tagName="h3" className={"section-title section-title--small"} value={props.attributes.subtitle} onChange={setSubtitle} />
                    <ul className="one-line-list">
                        <li><p className="paragraph paragraph--large" data-aos="fade-up">C++</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down">NET</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up"
                               data-aos-delay="100">JavaScript</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="100">Java</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up"
                               data-aos-delay="200">Android</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="200">IOS</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up" data-aos-delay="300">IOS</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="300">Ruby</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up" data-aos-delay="400">Rails</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="400">PHP</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up" data-aos-delay="500">Delphi</p>
                        </li>
                    </ul>
                </div>
                <div className="subsections-container">
                    <div className="subsection-container image-with-background image-with-background--tech-stack">
                        <div className="gradient-box" data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
                            <p className="colorful-title section-title section-title--small">20</p>
                            <p className="paragraph paragraph--medium">Years of<br />experiences</p>
                        </div>
                        <picture className="main-image" data-aos="fade-right" data-aos-duration="900">
                            <img src={props.attributes.imgURL} />
                        </picture>
                        <picture className="optional-image" data-aos="fade-down" data-aos-delay="800"
                                 data-aos-duration="700">
                            <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/tech-stack/dots.png`} />
                        </picture>
                        <picture className="rectangle">
                            <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/tech-stack/rectangle.png`} />
                        </picture>
                    </div>
                    <div className="subsection-container subsection-container--text">
                        <RichText tagName="h2" className={"section-title"} value={props.attributes.heading} onChange={setHeading} />
                        <RichText tagName="p" className={"paragraph paragraph--extra-large"} value={props.attributes.textContent} onChange={setTextContent} />
                        <a>
                            <button className="button button--hero">Call now</button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
            <section className="hero hero--tech-stack">
                <div className="text-container">
                    <h3 className="section-title section-title--small">{props.attributes.subtitle}</h3>
                    <ul className="one-line-list">
                        <li><p className="paragraph paragraph--large" data-aos="fade-up">C++</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down">NET</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up"
                               data-aos-delay="100">JavaScript</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="100">Java</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up"
                               data-aos-delay="200">Android</p></li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="200">IOS</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up" data-aos-delay="300">IOS</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="300">Ruby</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up" data-aos-delay="400">Rails</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-down" data-aos-delay="400">PHP</p>
                        </li>
                        <li><p className="paragraph paragraph--large" data-aos="fade-up" data-aos-delay="500">Delphi</p>
                        </li>
                    </ul>
                </div>
                <div className="subsections-container">
                    <div className="subsection-container image-with-background image-with-background--tech-stack">
                        <div className="gradient-box" data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
                            <p className="colorful-title section-title section-title--small">20</p>
                            <p className="paragraph paragraph--medium">Years of<br />experiences</p>
                        </div>
                        <picture className="main-image" data-aos="fade-right" data-aos-duration="900">
                            <img src={props.attributes.imgURL} />
                        </picture>
                        <picture className="optional-image" data-aos="fade-down" data-aos-delay="800"
                                 data-aos-duration="700">
                            <img src="/wp-content/themes/rekru-block/assets/tech-stack/dots.png" />
                        </picture>
                        <picture className="rectangle">
                            <img src="/wp-content/themes/rekru-block/assets/tech-stack/rectangle.png" />
                        </picture>
                    </div>
                    <div className="subsection-container subsection-container--text">
                        <h2 className="section-title">{props.attributes.heading}</h2>
                        <p className="paragraph paragraph--extra-large">{props.attributes.textContent}</p>
                        <a>
                            <button className="button button--hero">Call now</button>
                        </a>
                    </div>
                </div>
            </section>
    )
}