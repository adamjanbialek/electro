import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow, TextControl } from "@wordpress/components";
import { RichText, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/whyoutsourcing", {
    title: "Rekru Why Outsourcing",
    attributes: {
        subtitle: { type: "string" },
        btn: { type: "string" },
        url: { type: "string" },
        heading: { type: "string" },
        heading2: { type: "string" },
        textContent: { type: "string" },
        imgID: { type: "number" },
        imgURL: { type: "string" }
    },
    edit: EditComponent,
    save: SaveComponent
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    function setSubtitle(newSubtitle) {
        setAttributes({ subtitle: newSubtitle });
    }

    function setBtn(newBtn) {
        setAttributes({ btn: newBtn });
    }

    function setUrl(newUrl) {
        setAttributes({ url: newUrl });
    }

    function setHeading(newHeading) {
        setAttributes({ heading: newHeading });
    }

    function setHeading2(newHeading2) {
        setAttributes({ heading2: newHeading2 });
    }

    function setTextContent(newTextContent) {
        setAttributes({ textContent: newTextContent });
    }

    useEffect(() => {
        async function go() {
            if (attributes.imgID) {
                const response = await apiFetch({
                    path: `/wp/v2/media/${attributes.imgID}`,
                    method: "GET"
                });
                setAttributes({ imgURL: response.media_details.sizes.full.source_url });
            }
        }
        go();
    }, [attributes.imgID]);

    function onFileSelect(newImage) {
        setAttributes({ imgID: newImage.id });
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Image" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect}
                                value={attributes.imgID}
                                render={({ open }) => {
                                    return <Button onClick={open}>Choose Image</Button>;
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label="Url przycisku"
                            value={attributes.url}
                            onChange={(newUrl) => setUrl(newUrl)}
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <section className="hero hero--why-outsource">
                <div className="subsection-container image-with-background image-with-background--why-outsource">
                    <div className="gradient-box" data-aos="fade-down-right" data-aos-delay="400" />
                    <picture className="main-image" data-aos="zoom-out" data-aos-delay="400">
                        <img src={attributes.imgURL} alt="Main" />
                    </picture>
                    <picture className="optional-image" data-aos="fade-up-left" data-aos-delay="400">
                        <img src={`${window.location.origin}/wp-content/themes/rekru-block/assets/why-outsource/why-dots.jpg`} alt="Optional" />
                    </picture>
                    <div>
                        <RichText tagName="h3" value={attributes.heading2} onChange={setHeading2} />
                        <RichText tagName="span" className="subtitle subtitle--arrow" value={attributes.subtitle} onChange={setSubtitle} />
                        <a className={'btn-link'} >
                            <span><RichText className="subtitle subtitle--arrow" value={attributes.btn} onChange={setBtn} /></span>
                        </a>
                    </div>
                </div>
                <div className="subsection-container subsection-container--text">
                    <RichText tagName="h2" className="section-title" value={attributes.heading} onChange={setHeading} />
                    <RichText tagName="p" className="paragraph paragraph--medium" value={attributes.textContent} onChange={setTextContent} />
                </div>
            </section>
        </>
    );
}

function SaveComponent(props) {
    return (
        <section className="hero hero--why-outsource">
            <div className="subsection-container image-with-background image-with-background--why-outsource">
                <div className="gradient-box" data-aos="fade-down-right" data-aos-delay="400" />
                <picture className="main-image" data-aos="zoom-out" data-aos-delay="400">
                    <img src={props.attributes.imgURL} alt="Main" />
                </picture>
                <picture className="optional-image" data-aos="fade-up-left" data-aos-delay="400">
                    <img src="/wp-content/themes/rekru-block/assets/why-outsource/why-dots.jpg" alt="Optional" />
                </picture>
                <div>
                    <h3 >{props.attributes.heading2}</h3>
                    <span className="subtitle subtitle--arrow">{props.attributes.subtitle}</span>
                    <a className={'btn-link'} href={props.attributes.url}>
                        <span>{props.attributes.btn}</span>
                    </a>
                </div>
            </div>
            <div className="subsection-container subsection-container--text">
                <h2 className="section-title">{props.attributes.heading}</h2>
                <p className="paragraph paragraph--medium">{props.attributes.textContent}</p>
            </div>
        </section>
    );
}