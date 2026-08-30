import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Prevent the browser from restoring the previous scroll position
        window.history.scrollRestoration = "manual";

        // Scroll to the top after the route changes
        window.scrollTo(0, 0);

        // Run once again after the new page has rendered
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });

    }, [pathname]);

    return null;
}

export default ScrollToTop;
