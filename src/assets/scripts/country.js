function get(countryList){
    console.log("jqueryexec");
    $(document).ready(function() {
    $('#tableData').DataTable( {
        "ajax": "countryList",
        "columns": [
            { "data": "country" },
            { "data": "Alternate Country Name" },
            { "data":"Actions"}
            
        ]
    } );
} );

}