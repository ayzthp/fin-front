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
    backgroundImage: 'image.png', // Replace with your image URL
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

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
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
        <SignUpButton
          style={{ ...buttonStyle, ':hover': buttonHoverStyle }}
        />
        <SignInButton
          style={{ ...buttonStyle, ':hover': buttonHoverStyle }}
        />
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
