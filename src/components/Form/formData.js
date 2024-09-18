let formText = '';

function download(filename) {
    let data = formText;
    let type = 'text/plain';
    let file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        let a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function formData(data) {
    const dataName = data.name;
    const dataEmail = data.email;
    const dataSubject = data.subject;
    const dataMessage = data.message;
    const textName = dataName.toString();
    const textEmail = dataEmail.toString();
    const textSubject = dataSubject.toString();
    const textMessage = dataMessage.toString();
    formText = `Sender Name: ${textName} | Sender Email: ${textEmail} | Sender Subject: ${textSubject} | Sender Message: ${textMessage}`;
    download('form-input.txt')
}

export default formData