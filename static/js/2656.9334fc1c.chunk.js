"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[2656],{2656:function(n,e,t){t.r(e),e.default="REPORT zrosetta_base64_encode_data.\n\nDATA: li_client  TYPE REF TO if_http_client,\n      lv_encoded TYPE string,\n      lv_data    TYPE xstring.\n\n\ncl_http_client=>create_by_url(\n  EXPORTING\n    url    = 'http://rosettacode.org/favicon.ico'\n  IMPORTING\n    client = li_client ).\n\nli_client->send( ).\nli_client->receive( ).\n\nlv_data = li_client->response->get_data( ).\n\nCALL FUNCTION 'SSFC_BASE64_ENCODE'\n  EXPORTING\n    bindata = lv_data\n  IMPORTING\n    b64data = lv_encoded.\n\nWHILE strlen( lv_encoded ) > 100.\n  WRITE: / lv_encoded(100).\n  lv_encoded = lv_encoded+100.\nENDWHILE.\nWRITE: / lv_encoded.\n"}}]);
//# sourceMappingURL=2656.9334fc1c.chunk.js.map