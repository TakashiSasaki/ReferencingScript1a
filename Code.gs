function updateData() {
    ReferencedLibrary.updateData();
}

function getData() {
    return ReferencedLibrary.getData();
}

function doGet(e) {
    var htmlTemplate = HtmlService.createTemplateFromFile("index");
    htmlTemplate.title = PropertiesService.getScriptProperties().getProperty("title");
    htmlTemplate.scriptId = ScriptApp.getScriptId();
    htmlTemplate.editUrl = "https://script.google.com/d/" + htmlTemplate.scriptId + "/edit?usp=sharing";
    htmlTemplate.devUrl = PropertiesService.getScriptProperties().getProperty("devUrl");
    htmlTemplate.execUrl = ScriptApp.getService().getUrl();
    var htmlOutput = htmlTemplate.evaluate().setTitle(htmlTemplate.title);
    return htmlOutput;
}