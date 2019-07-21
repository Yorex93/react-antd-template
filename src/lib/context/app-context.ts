import React from "react";

type App = {
    isMobile: boolean,
}
  
const AppContext = React.createContext<App>({} as any);

export default AppContext;
