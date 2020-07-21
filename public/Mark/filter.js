function zorgchanged() {
    if($('#chkbx-compact-3').not((':checked'))){
        $('.ZORG').hide();
    }
    if($('#chkbx-compact-3').is((':checked'))){
        $('.ZORG').show();
    }
}

function itchanged() {
    if($('#chkbx-compact-2').not((':checked'))){
        $('.ICT').hide();
    }
    if($('#chkbx-compact-2').is((':checked'))){
        $('.ICT').show();
    }
}

function aochanged() {
    if($('#chkbx-compact-1').not((':checked'))){
        $('.SOFTWARE-ONTWIKKELAAR').hide();
    }
    if($('#chkbx-compact-1').is((':checked'))){
        $('.SOFTWARE-ONTWIKKELAAR').show();
    }
}

function mbochanged() {
    if($('#chkbx-compact-6').not((':checked'))){
        $('.MBO').hide();
    }
    if($('#chkbx-compact-6').is((':checked'))){
        $('.MBO').show();
    }
}

function vwochanged() {
    if($('#chkbx-compact-5').not((':checked'))){
        $('.VWO').hide();
    }
    if($('#chkbx-compact-5').is((':checked'))){
        $('.VWO').show();
    }
}

function havochanged() {
    if($('#chkbx-compact-4').not(':checked')){
        $('.HAVO').hide();
    }
    if($('#chkbx-compact-4').is((':checked'))){
        $('.HAVO').show();
    }
}

function verYes() {
    if ($('#chkbx-compact-7').not(':checked')){
        $('.verYes').hide();
    }
    if ($('#chkbx-compact-7').is(':checked')){
        $('.verYes').show();
    }
}

function verNo() {
    if ($('#chkbx-compact-8').not(':checked')){
        $('.VerNo').hide();
    }
    if ($('#chkbx-compact-8').is(':checked')){
        $('.VerNo').show();
    }
}

function verMischien() {
    if ($('#chkbx-compact-9').not(':checked')){
        $('.verMischien').hide();
    }
    if ($('#chkbx-compact-9').is(':checked')){
        $('.verMischien').show();
    }
}