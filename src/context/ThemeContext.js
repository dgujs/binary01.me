import React, { createContext } from 'react';

const initialState = {
  isDarkMode: false,
  setDarkMode: () => { },
};

const ThemeContext = createContext(initialState);

const toDark = () => {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
};

const toLight = () => {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
};

class ThemeProvider extends React.Component {
    state = {
      isDarkMode: localStorage.getItem('isDarkMode') === 'true'
    }

    componentDidMount = () => {
      const Mode = this.state.isDarkMode === true ? toDark : toLight;
      Mode();
    }

    setDarkMode = () => {
      this.setState({ isDarkMode: !this.state.isDarkMode }, () => {
        const Mode = this.state.isDarkMode === true ? toDark : toLight;
        localStorage.setItem('isDarkMode', this.state.isDarkMode);

        Mode();
      });
    }

    render() {
      const { children } = this.props;
      const { isDarkMode } = this.state;

      return (
            <ThemeContext.Provider value={{ isDarkMode, setDarkMode: this.setDarkMode }}>
                {children}
            </ThemeContext.Provider>
      );
    }
}

export default ThemeContext;

export { ThemeProvider };