/* global CONFIG */
/*
  CONFIG may or may not be available. It's a JSON serialised value of the helm
  charts' {{ .Values.config.env }} and it's injected through a ConfigMap
  and loaded in index.html
*/

const defaults = {
  REACT_APP_API_URL: "https://fsljjwcbul.execute-api.ap-southeast-1.amazonaws.com/latest",
  REACT_APP_GOOGLE_API_KEY: "AIzaSyBLm6wQeW0LX4rt7VE4oB3F1YKO8MhGB-w",
  REACT_GOOGLE_ANALYTICS_KEY: "UA-137587799-3"
}

const INJECTED = (typeof (CONFIG) === 'undefined') ? {} : CONFIG

const Config = {
  ...defaults,
  ...INJECTED
}

export default Config
