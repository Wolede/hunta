import React, { useState } from 'react'

const Embed = () => {
    const [loading, setLoading] = useState(true);

    const hideLoader = () => {
        setLoading(!loading)        
    }

    return (
        <div>
            {loading ? (
                <div className="loading-placeholder">

                </div>
            ) : null}

            <iframe id='travelstartIframe-6de3ec3b-c31c-49b6-b9fa-76ef1cede4b9'
            frameBorder='0'
            scrolling='yes'
            src="https://www.travelstart.com/search-on-index?search=false&show_banners=true&log=true&affId=198718&language=&affCampaign=&utm_source=affiliate&utm_medium=198718&isiframe=true&landing_page=false&iframeVersion=11&host=http://www.huntagroup.com/destinations"
            style={{ width : '100%', minHeight : '23rem' }}
            onLoad={hideLoader}
            >
            </iframe>
        </div>
    )
}

export default Embed
