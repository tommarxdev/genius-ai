"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("97f5d436-9316-4719-bc4c-ae6dcfbbdc66");
    }, []);

    return null;
};