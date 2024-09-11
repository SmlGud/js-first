let tag = document.getElementById('piar');
            tag.addEventListener('click', function(){
                console.log('I am here');
                // alert ('I am here');
                let isnormq = (tag.getAttribute('class') === 'normq')
                if (isnormq) {
                    tag.setAttribute('class', '');
                } else{
                    tag.setAttribute('class', 'normq');
                }
            }, false);