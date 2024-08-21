const xhr = new XMLHttpRequest();
const url = './md/index.md';

xhr.open("GET", url);

xhr.onreadystatechange = () => {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        const pre = document.querySelector('pre');
        pre.innerText = xhr.responseText;
      } else {
        console.log('error');
      }
    }
  };

  xhr.send();