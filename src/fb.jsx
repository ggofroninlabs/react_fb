import React, {useEffect} from 'react';

const FBComp = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : false,
        version          : 'v8.0'
      });
    };
    window.extAsyncInit = function() {
      console.log('dfsdffsdfd')
      // the Messenger Extensions JS SDK is done loading 
    };

    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  }, [])
  return (
    <div>

    </div>
  )
}

export default FBComp
