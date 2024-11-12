// src/analytics.js
import ReactGA from "react-ga4";

// Initialize Google Analytics with your Measurement ID
export const initGA = () => {
  ReactGA.initialize("G-WLL8MK0MQZ"); // replace with your Measurement ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};