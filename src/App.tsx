import React from 'react';

import { ThemeProvider } from 'globals/theme';

type Props = {
  children: React.ReactNode;
};

const App: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
