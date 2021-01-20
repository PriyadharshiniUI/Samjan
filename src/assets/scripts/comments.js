function get(commentList){
    console.log("jqueryexec");
        $(document).ready(function() {
        $('#myTable').DataTable( {
            "ajax": "commentList",
            "columns": [
                { "data": "COMMENT" },
                { "data": "ACTIONS" }
            ]
        } );
    } );
}