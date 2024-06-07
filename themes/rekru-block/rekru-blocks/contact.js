import {RichText} from "@wordpress/block-editor";

wp.blocks.registerBlockType("rekrublocktheme/contact", {
    title: "Rekru Contact",
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
            <section className="form-section">
                <div className="form-container form-container--outsourcing">
                    <RichText tagName="h2" className={"section-title section-title--medium"} value={props.attributes.heading} onChange={setHeading} />
                    <RichText tagName="p" className={"paragraph paragraph--medium"} value={props.attributes.textContent} onChange={setTextContent} />
                    <div className="form-subcontainer">
                        <input type="text" placeholder="Enter your Name" className="form-input" required />
                        <input type="email" placeholder="Enter Your Mail" className="form-input" required />
                        <input type="text" placeholder="Enter Your Topic" className="form-input" required />
                        <input type="text" placeholder="Enter Your Massage" className="form-input" required />
                        <button className="button button--hero">Send Massage</button>
                    </div>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="form-section">
            <div className="form-container form-container--outsourcing">
                <h2 className="section-title section-title--medium">{props.attributes.heading}</h2>
                <p className="paragraph paragraph--medium">{props.attributes.textContent}</p>
                <div className="form-subcontainer">
                    <input type="text" placeholder="Enter your Name" className="form-input" required />
                    <input type="email" placeholder="Enter Your Mail" className="form-input" required />
                    <input type="text" placeholder="Enter Your Topic" className="form-input" required />
                    <input type="text" placeholder="Enter Your Massage" className="form-input" required />
                    <button className="button button--hero">Send Massage</button>
                </div>
            </div>
        </section>
    )
}