import { createContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ Children }) => {
  const [state, setState] = useState();
  <AppContext.Provider value={(state, setState)}>
    {Children}
  </AppContext.Provider>;
};

export default AppProvider;
