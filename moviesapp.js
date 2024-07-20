
$(document).ready(function() {
    const entries = [];

    function renderEntries() {
        $('#entries').empty();
        entries.forEach(entry => {
            const entryDiv = $('<div class="entry"></div>').text(`Title: ${entry.title}, Rating: ${entry.rating}`);
            const removeButton = $('<button>Remove</button>');

            removeButton.on('click', function() {
                const index = entries.indexOf(entry);
                if (index > -1) {
                    entries.splice(index, 1);
                }
                renderEntries();
            });

            entryDiv.append(removeButton);
            $('#entries').append(entryDiv);
        });
    }

    $('#titleRatingForm').on('submit', function(event) {
        event.preventDefault();

        const title = $('#title').val();
        const rating = parseInt($('#rating').val(), 10);

        if (title.length < 2) {
            alert('Title must be at least 2 characters long.');
            return;
        }

        if (rating < 0 || rating > 10) {
            alert('Rating must be between 0 and 10.');
            return;
        }

        entries.push({ title, rating });
        renderEntries();

        // Clear the form inputs
        $('#title').val('');
        $('#rating').val('');
    });

    $('#sortTitleAsc').on('click', function() {
        entries.sort((a, b) => a.title.localeCompare(b.title));
        renderEntries();
    });

    $('#sortTitleDesc').on('click', function() {
        entries.sort((a, b) => b.title.localeCompare(a.title));
        renderEntries();
    });

    $('#sortRatingAsc').on('click', function() {
        entries.sort((a, b) => a.rating - b.rating);
        renderEntries();
    });

    $('#sortRatingDesc').on('click', function() {
        entries.sort((a, b) => b.rating - a.rating);
        renderEntries();
    });
});

// simple solution
// $(document).ready(function() {
//     $('#titleRatingForm').on('submit', function(event) {
//         event.preventDefault();
        
//         const title = $('#title').val();
//         const rating = $('#rating').val();

//         const entry = $('<div class="entry"></div>').text(`Title: ${title}, Rating: ${rating}`);
//         const removeButton = $('<button>Remove</button>');

//         removeButton.on('click', function() {
//             $(this).parent().remove();
//         });

//         entry.append(removeButton);
//         $('#entries').append(entry);

//         // Clear the form inputs
//         $('#title').val('');
//         $('#rating').val('');
//     });
// });