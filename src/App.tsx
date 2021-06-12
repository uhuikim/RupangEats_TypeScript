import React from "react";

import Header from "components/Layout/Header";

import { ThemeProvider } from "globals/theme";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
