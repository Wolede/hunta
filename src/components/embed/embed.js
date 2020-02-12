import React, { useState } from 'react'

const Embed = () => {
    const [loading, setLoading] = useState(true);
    // const [iframeFocus, setIframeFocus] = useState(false);

    const hideLoader = () => {
        setLoading(!loading)  
        // setTimeout(() => {
        //         setIframeFocus(!iframeFocus)
        // }, 2000);
    }

    return (
        <div>
            {loading ? (
                <div className="loading-placeholder">
                    {/* loader here  */}
                </div>
            ) : null}
            {/* <div className={iframeFocus ? ' ' : 'invisible'}> */}
            <div style={ loading ? { display : 'none' } : { display : 'block' }}>
                <iframe id='travelstartIframe-6de3ec3b-c31c-49b6-b9fa-76ef1cede4b9'
                frameBorder='0'
                scrolling='yes'
                src="https://www.travelstart.com/search-on-index?search=false&show_banners=true&log=true&affId=198718&language=&affCampaign=&utm_source=affiliate&utm_medium=198718&isiframe=true&landing_page=false&iframeVersion=11&host=http://www.huntagroup.com/destinations"
                style={{ width : '100%', minHeight : '23rem' }}
                onLoad={hideLoader}
                >
                </iframe>
            </div>
        </div>
    )
}

export default Embed
