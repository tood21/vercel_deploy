import TagManager from 'react-gtm-module';
import {useEffect} from "react";
const GoogleTagManager = ({gtmId}) => {
  useEffect(() => {
    TagManager.initialize({gtmId});
  }, [gtmId]);

  return <></>;
};

export default GoogleTagManager;