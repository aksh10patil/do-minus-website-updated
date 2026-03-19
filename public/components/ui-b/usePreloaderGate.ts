"use client";

import { useLayoutEffect, useState } from "react";

const PRELOADER_BLOCK_EVENT = "do-minus:preloader-block";
const PRELOADER_RELEASE_EVENT = "do-minus:preloader-release";

type PreloaderWindow = Window & {
    __DO_MINUS_PRELOADER_ACTIVE__?: boolean;
};

const getWindowState = () => window as PreloaderWindow;

export const blockPreloaderGate = () => {
    const preloaderWindow = getWindowState();
    preloaderWindow.__DO_MINUS_PRELOADER_ACTIVE__ = true;
    window.dispatchEvent(new Event(PRELOADER_BLOCK_EVENT));
};

export const releasePreloaderGate = () => {
    const preloaderWindow = getWindowState();
    preloaderWindow.__DO_MINUS_PRELOADER_ACTIVE__ = false;
    window.dispatchEvent(new Event(PRELOADER_RELEASE_EVENT));
};

export const usePreloaderGate = () => {
    const [isReady, setIsReady] = useState(true);

    useLayoutEffect(() => {
        const syncGate = () => {
            const preloaderWindow = getWindowState();
            const hasActivePreloader =
                preloaderWindow.__DO_MINUS_PRELOADER_ACTIVE__ ||
                document.querySelector('[data-do-minus-preloader="active"]') !== null;

            setIsReady(!hasActivePreloader);
        };

        const handleBlock = () => setIsReady(false);
        const handleRelease = () => setIsReady(true);

        syncGate();
        window.addEventListener(PRELOADER_BLOCK_EVENT, handleBlock);
        window.addEventListener(PRELOADER_RELEASE_EVENT, handleRelease);

        return () => {
            window.removeEventListener(PRELOADER_BLOCK_EVENT, handleBlock);
            window.removeEventListener(PRELOADER_RELEASE_EVENT, handleRelease);
        };
    }, []);

    return isReady;
};
