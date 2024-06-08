function toggleForm(formId) {

    const form = document.getElementById(formId);

    if (form.style.display === 'block') {

        form.style.display = 'none';

    } else {

        form.style.display = 'block';

    }

}

function updateProfileImage(event) {

    const input = event.target;

    if (input.files && input.files[0]) {

        const reader = new FileReader();

        reader.onload = function(e) {

            document.querySelector('.profile-image').src = e.target.result;

        };

        reader.readAsDataURL(input.files[0]);

    }

}




function toggleForm(formId) {
    const $form = $('#' + formId);
    if ($form.css('display') === 'block') {
        $form.css('display', 'none');
    } else {
        $form.css('display', 'block');
    }
}

function updateProfileImage(event) {
    const $input = $(event.target);
    if ($input[0].files && $input[0].files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            $('.profile-image').attr('src', e.target.result);
        };
        reader.readAsDataURL($input[0].files[0]);
    }
}
