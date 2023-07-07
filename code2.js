ids = ['name', 'mail', 'address', 't1', 'list1','t2', 'list2', 't3', 'list3']

function editing() {
    console.log('editing')
    for (var i of ids) {
        document.getElementById(i).contentEditable = 'true'
    }
    document.getElementById('edit').style.visibility = 'hidden'
    document.getElementById('done').style.visibility = 'visible'
}

function finished() {
    console.log('done')
    for (var i of ids) {
        document.getElementById(i).contentEditable = 'false'
    }
    document.getElementById('edit').style.visibility = 'visible'
    document.getElementById('done').style.visibility = 'hidden'
}

