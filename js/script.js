function copyText(){
    let textToCopy = document.getElementById('contact-address').innerText
    const el = document.createElement('textarea');
    el.value = textToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    //Show Message
    var msgToShow = document.createElement("div");
    var newSpan = document.createElement('span');
    msgToShow.setAttribute("style","position:fixed;top:40px;left:50%;background-color:#d9d9d9;border: 1px solid #c3e6cb;border-radius: 5px;padding: 10px 15px;transform: translateX(-50%);width:600px; max-width:95%;");
    newSpan.setAttribute("style","color:#000;font-size:16px;");

    newSpan.innerHTML = 'Successfully copied';
    msgToShow.appendChild(newSpan);
    
    setTimeout(function(){
    msgToShow.parentNode.removeChild(msgToShow);
    },3000);
    document.body.appendChild(msgToShow);
}