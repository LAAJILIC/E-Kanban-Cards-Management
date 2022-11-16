import { useState } from "react";

const useStateWithCallback = (kanbans) => {
    const [onGoingPalettes, setOnGoingPalettes] = useState(kanbans);

    const setKanbansAndCallback = (newTab, callback) => {
        setOnGoingPalettes(prevTab => {
            if (callback) {
                callback(prevTab, newTab);
            }
            return newTab;
        });
    };

    return [onGoingPalettes, setKanbansAndCallback];
}

export { useStateWithCallback};