import ReactGA from 'react-ga';

export const initGA = (trackingID) => {
   ReactGA.initialize('UA-107706366-4');
}

export const PageView = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

