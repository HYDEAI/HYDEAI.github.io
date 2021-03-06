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

$(document).ready(function(){
    $('.the-list-item').click(function(){
        var msg = this.textContent
        var msgToShow = document.createElement("div");
        var newSpan = document.createElement('span');
        var closeIcon = document.createElement('i');
        msgToShow.setAttribute("style","z-index: 999;position:absolute;bottom:40px;right:20px;background-color:red;border-radius: 4px;padding: 20px 30px;");
        newSpan.setAttribute("style","color:#fff;font-size:16px;");
        closeIcon.setAttribute("style","padding-left: 20px;cursor:pointer;");
        closeIcon.classList.add('fa');
        closeIcon.classList.add('fa-close');
        closeIcon.onclick = function(){
            this.parentElement.style.display='none';
        }

        newSpan.innerHTML = msg + ' Not Installed';
        msgToShow.appendChild(newSpan);
        msgToShow.appendChild(closeIcon);
        
        setTimeout(function(){
        msgToShow.parentNode.removeChild(msgToShow);
        },2000);
        document.body.appendChild(msgToShow);
    });
});


$(document).ready(function(){
    $('.switch').click(function(){
        $('.switch').toggleClass('done');
        if ( $('.switch').hasClass('done')){
            document.querySelector('.box-popup-farm-bright .popup-title').innerHTML = 'Unstake LP Tokens'
            document.querySelector('.box-popup-farm-bright .switch-val').innerHTML = 'Unstake LP'
            document.querySelector('.box-popup-farm-bright #stakedornot').innerHTML = 'Unstake:'
            document.querySelector('.box-popup-farm-bright #balancedornot').innerHTML = 'Staked:'
        }
        else{
            document.querySelector('.box-popup-farm-bright .popup-title').innerHTML = 'Stake LP Tokens'
            document.querySelector('.box-popup-farm-bright .switch-val').innerHTML = 'Stake LP'
            document.querySelector('.box-popup-farm-bright #stakedornot').innerHTML = 'Stake:'
            document.querySelector('.box-popup-farm-bright #balancedornot').innerHTML = 'Balance:'
        }
    });
});

