

    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      var f = d.createElement('form');
      f.action = 'https://maker.ifttt.com/trigger/1/with/key/lgxX_Yg5-3QH-xSyfp0u--mpylftoK8gp4-IVBJ3iIo';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  