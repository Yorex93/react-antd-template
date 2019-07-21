import React from "react";
import AppLayout from "../layouts/AppLayout";
import FeatureDashboard from "./components/FeatureDashboard";
import FeatureSideBarLeft from "./components/FeatureSidebarLeft";
import FeatureSideBarRight from "./components/FeatureSideBarRight";

export const FeatureContainer = () => {
    return (
        <AppLayout 
            layoutBody = {() => <FeatureDashboard />}
            sideBarLeft = {() => <FeatureSideBarLeft />}
            sideBarRight = {() => <FeatureSideBarRight />}
        />
    )
}

