if (document.querySelector('.item-mark') != null) {
    let likeIcon = document.querySelectorAll('.item-mark');
    for (let i = 0; i < likeIcon.length; i++) {
        likeIcon[i].addEventListener('click', function () {
            //console.log('123');
            if (this.className == 'item-mark fas fa-heart') {
                this.className = 'item-mark far fa-heart'
            }else{
                this.className = 'item-mark fas fa-heart'
            }
        }, false);
    }
}
