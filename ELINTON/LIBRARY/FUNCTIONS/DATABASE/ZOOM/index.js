export const ZOOM = () => {
    window.addEventListener(
        "wheel",
        (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        },
        { passive: false }
    );
    window.addEventListener("keydown", (e) => {
        if (
            (e.ctrlKey || e.metaKey) &&
            (
                e.key === "+" ||
                e.key === "-" ||
                e.key === "=" ||
                e.key === "0"
            )
        ) {
            e.preventDefault();
        };
    });
    document.addEventListener(
        "touchmove",
        (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        },
        { passive: false }
    );
    let lastTouchEnd = 0;
    document.addEventListener(
        "touchend",
        (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        },
        false
    );
    ["gesturestart", "gesturechange", "gestureend"].forEach((event) => {
        document.addEventListener(
            event,
            (e) => {
                e.preventDefault();
            },
            { passive: false }
        );
    });
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
        viewport = document.createElement("meta");
        viewport.name = "viewport";
        document.head.appendChild(viewport);
    };
    viewport.content ="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no";
};