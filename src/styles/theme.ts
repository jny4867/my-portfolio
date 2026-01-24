export interface Theme {
  colors: {
    background: string;
    text: string;
    sidebarBg: string;
    border: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    sidebarBg: '#f8f8f8',
    border: '#e0e0e0',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#000000',
    text: '#ffffff',
    sidebarBg: '#0a0a0a',
    border: '#1a1a1a',
  },
};
