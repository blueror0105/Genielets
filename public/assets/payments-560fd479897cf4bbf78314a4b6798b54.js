var paymentsForm=function(){var a=function(){var a=$("#outstanding-payments-table").dataTable({aoColumnDefs:[{aTargets:[0]}],oLanguage:{sLengthMenu:"Show _MENU_ Rows",sSearch:"",oPaginate:{sPrevious:"",sNext:""}},aaSorting:[[1,"asc"]],aLengthMenu:[[5,10,15,20,-1],[5,10,15,20,"All"]],iDisplayLength:10});$("#outstanding-payments-table_wrapper .dataTables_filter input").addClass("form-control input-sm").attr("placeholder","Search"),$("#outstanding-payments-table_wrapper .dataTables_length select").addClass("m-wrap small"),$("#outstanding-payments-table_wrapper .dataTables_length select").select2(),$('#outstanding-payments-table_column_toggler input[type="checkbox"]').change(function(){var t=parseInt($(this).attr("data-column")),e=a.fnSettings().aoColumns[t].bVisible;a.fnSetColumnVis(t,e?!1:!0)})},t=function(){var a=$("#paid-payments-table").dataTable({aoColumnDefs:[{aTargets:[0]}],oLanguage:{sLengthMenu:"Show _MENU_ Rows",sSearch:"",oPaginate:{sPrevious:"",sNext:""}},aaSorting:[[1,"asc"]],aLengthMenu:[[5,10,15,20,-1],[5,10,15,20,"All"]],iDisplayLength:10});$("#paid-payments-table_wrapper .dataTables_filter input").addClass("form-control input-sm").attr("placeholder","Search"),$("#paid-payments-table_wrapper .dataTables_length select").addClass("m-wrap small"),$("#paid-payments-table_wrapper .dataTables_length select").select2(),$('#paid-payments-table_column_toggler input[type="checkbox"]').change(function(){var t=parseInt($(this).attr("data-column")),e=a.fnSettings().aoColumns[t].bVisible;a.fnSetColumnVis(t,e?!1:!0)})};return{init:function(){a(),t()}}}();$(document).ready(function(){paymentsForm.init()});