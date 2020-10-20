$(function () {
    $('#js-shopping-list-form').submit(event => {

        event.preventDefault();

        let newItemName = ($(event.currentTarget).find(
            'input[name="shopping-list-entry"]').val());

        let newListItem =
            `<li>
                <span class="shopping-item">${newItemName}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                     <span class="button-label">check</span>
                    </button>
                        <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`;

        console.log(this);
        $('.shopping-list').append(newListItem);

    });

    $('#shopping-list')

});


$('.shopping-item-toggle').on('click', (function (event) {

    event.stopPropagation();

    console.log(this);
    $(this.closest('li').children[0]).toggleClass('shopping-item__checked');

}))


$('.shopping-item-delete').on('click', (function (event) {

    event.stopPropagation();

    console.log(this.closest('li'));
    this.closest('li').remove();

}))

