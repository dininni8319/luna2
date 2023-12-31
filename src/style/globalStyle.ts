import { createGlobalStyle } from 'styled-components'

export const globalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F7F8FA;
  }

  a {
    text-decoration: none;
    color: #646363;
  }
  
  ul {
    padding: 0;
    list-style: none;
  }

  .class-error {
    font-size: xx-small;
    font-weight: 300;
    /* text-align: center; */
    color: red;
    margin-top: 0;
    padding: 0 0 5px 0;
  }
`

export const Theme = {
    navbarColor: 'white',
    buttonColor: '#E47D31',
    footerColor: '#272D36',
    borderColor: '#F2F2F2',
    borderGray: '#EBEBEB',
    textGrey: '#646363',
    //color for the input and line bottom
    borderGrayColor: '#e5e5e5',
    textShadow: 'text-shadow:  5px 5px 11px rgba(0,0,0,1)',
    bodyBackgroundColor: 'rgba(222,222,222)',
    //not in use
    backgroundGrayColor: '#F1F2F6',
    grayInputText: '#888888',
    linkColor: '#03045e',
    //////////////

    //We could usse this colour for the text, they are not in use at the moment!
    textGray: '#1C1C1C',
    disabledColor: 'rgb(255, 213, 128, 0.8)',
    boxShadow: 'box-shadow: 0 0 15px rgba(0, 0, 0, 0.4)',
    //that for the details pages
    boxShadow2: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    borderRadius: '5px',
    fontFamily: '"Roboto", sans-serif'
}
