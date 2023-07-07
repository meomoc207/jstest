
function editing() {
    console.log("editing");
    document.getElementById('list1').contentEditable = "true"
    document.getElementById('list2').contentEditable = "true"
    document.getElementById('list3').contentEditable = "true"
    document.getElementById('name').contentEditable = "true"
    document.getElementById('mail').contentEditable = "true"
    document.getElementById('address').contentEditable = "true"
    document.getElementById('t1').contentEditable = "true"
    document.getElementById('t2').contentEditable = "true"
    document.getElementById('t3').contentEditable = "true"
    document.getElementById('mail').contentEditable = "true"
}
function finished() {
    console.log('finished')
    document.getElementById('list1').contentEditable = "false"
    document.getElementById('list2').contentEditable = "false"
    document.getElementById('list3').contentEditable = "false"
    document.getElementById('name').contentEditable = "false"
    document.getElementById('mail').contentEditable = "false"
    document.getElementById('address').contentEditable = "false"
    document.getElementById('t1').contentEditable = "false"
    document.getElementById('t2').contentEditable = "false"
    document.getElementById('t3').contentEditable = "false"
    document.getElementById('mail').contentEditable = "false"
}

