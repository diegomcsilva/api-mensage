(function($) {
    // console.log('Hello', $);

    $(document).ready(function() {
        const listData = function() {
            $.get('http://localhost:3000/bills', function(result){
                console.log(result)

                if(!result.data.length && !result.status) {
                    return;
                }

                result.data.forEach( function(bill) {
                    let tmpl = '<tr> ' +
                        '   <td>' + bill.title + '</td>' +
                        '   <td>' + bill.price + '</td>' +
                        '</tr>'
                    $('#list_table tbody').append(tmpl)
                })
            })
        }

        listData()
    })
})(jQuery)
