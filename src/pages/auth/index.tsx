import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(image.png)', // Corrected background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    textAlign: 'center',
    padding: '0 20px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const buttonWrapperStyle: React.CSSProperties = {
    margin: '10px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#2980b9',
  };

  return (
    <div style={containerStyle}>
      <SignedOut>
        <h1 style={headingStyle}>Welcome to Your Own Personal Finance Tracker!</h1>
        <div
          style={buttonWrapperStyle}
          onMouseEnter={(e) => (e.currentTarget.children[0].style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.children[0].style.backgroundColor = buttonStyle.backgroundColor)}
        >
          <div style={buttonStyle}>
            <SignUpButton />
          </div>
        </div>
        <div
          style={buttonWrapperStyle}
          onMouseEnter={(e) => (e.currentTarget.children[0].style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.children[0].style.backgroundColor = buttonStyle.backgroundColor)}
        >
          <div style={buttonStyle}>
            <SignInButton />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
