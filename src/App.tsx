import React from "react";

import { ThemeProvider } from "globals/theme";

const App: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
