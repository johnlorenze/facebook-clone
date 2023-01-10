import React, { useLayoutEffect, useState } from 'react';

function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateScreenSize() {
            setScreenSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateScreenSize);
        updateScreenSize();
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
}

function Widgets() {
    const [width] = useMediaQuery();
    let setWidth = "";

    if (width < 1200) {
        setWidth = "280";
    } else {
        setWidth = "320";
    }

    return (
        <div className="widgets">
            <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=${setWidth}&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width={setWidth}
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default Widgets
