export interface Theme {
  colors: {
    background: string;
    text: string;
    border: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    border: '#e0e0e0',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#0f0f0f',
    text: '#ffffff',
    border: '#2a2a2a',
  },
};
