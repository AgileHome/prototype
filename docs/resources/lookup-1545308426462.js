(function(window, undefined) {
  var dictionary = {
    "aa7c7f9e-653c-4cfc-a839-39a786507d37": "Tarea",
    "290ce498-3412-4a19-9692-74fa70a1559f": "TareasGlobal",
    "06809590-62cb-433b-99d0-c582c5c01e39": "AccederGrupo",
    "f096395a-8f80-44c2-8910-3bfd450d193c": "CompartirCodigo",
    "3f1f727e-3c06-4c27-ac6a-8811575d8aaf": "MisTareas",
    "081225d2-d400-4361-bee5-09769f65b89e": "cerveza",
    "0abe686e-ba78-4b88-bc74-b17cc2dae656": "CrearGrupo",
    "58f17e8a-aba4-4553-b909-7b975c427d13": "Inicio",
    "8662f562-b00a-4c4e-93eb-58e1d6f37b90": "Tablon",
    "95abac31-dc89-43fc-ad9d-61426af332dd": "TareasOtroUsuario",
    "abdbeb0d-73f6-4467-8c4d-38dca336866e": "recompensas",
    "a9b668f1-5a8a-4f86-9f1c-2f3b31ba256f": "Grupo",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);