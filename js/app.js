document.addEventListener('DOMContentLoaded', function() {
//dropdown menu
    var li = document.querySelectorAll('.menu > ul');
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseover', function() {
            if (this.querySelector('ul')) {
                this.querySelector('ul').style.display = 'grid';
            }

        });
        li[i].addEventListener('mouseout', function() {
            if (this.querySelector('ul')) {
                this.querySelector('ul').style.display = 'none';
            }
        });
    }

    //section piscs

    var pics = document.querySelectorAll('.clair');

    pics[0].addEventListener('mouseover', function() {

        pics[0].style.display = 'none';

    });

    pics[1].addEventListener('mouseover', function() {

        pics[i].style.display = 'none';

    });

    //slider


    var back = document.querySelector('.back');
    var next = document.querySelector('.next');

    var lis = document.querySelectorAll('.slider li');

    var record = 0;

    console.log(back);
    console.log(next);
    console.log(lis);
    console.log(record);

    lis[record].classList.add('chair__pic');

    back.addEventListener('click', function() {
        console.log('back');

        lis[record].classList.remove('chair__pic');
        record = record - 1 < 0 ? 0 : record - 1;

        lis[record].classList.add('chair__pic');

    });


    next.addEventListener('click', function() {

        console.log('next');

        lis[record].classList.remove('chair__pic');

        record = record + 1 < lis.length ? record + 1 : record;

        lis[record].classList.add('chair__pic');

    });




});
